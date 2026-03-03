import { getEventById } from '@/app/lib/getNews'

import Link from "next/link";
import React from "react";

/* ✅ Correct params typing (App Router) */
type PageProps = {
  params: {
    id: string;
  };
};

const SingleEventPage = async ({ params }: PageProps) => {
  const id = Number(params.id);

  const oneEvent = await getEventById(id);

  /* ✅ Safety check */
  if (!oneEvent) {
    return <div className="container py-5">Event not found</div>;
  }

  return (
    <>
      {/* ===== Page Title ===== */}
      <section className="page-title page-title-blank bg-white" id="page-title">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="title">
                <ol className="breadcrumb breadcrumb-long">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item">
                    <Link href="/about-us/events">Events</Link>
                  </li>

                  <li className="breadcrumb-item active">
                    {oneEvent.title.rendered}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Event Content ===== */}
      <section className="blog blog-single" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-entry">

                {/* ✅ Featured Image (WordPress structure) */}
                {oneEvent.featured_media_src_url && (
                  <div className="entry-img">
                    <img
                      src={oneEvent.featured_media_src_url}
                      alt={oneEvent.title.rendered}
                      className="img-fluid"
                    />
                  </div>
                )}

                <div className="entry-content">
                  <div className="entry-title">
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: oneEvent.title.rendered,
                      }}
                    />
                  </div>

                  <div
                    className="entry-bio"
                    dangerouslySetInnerHTML={{
                      __html: oneEvent.content.rendered,
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleEventPage;