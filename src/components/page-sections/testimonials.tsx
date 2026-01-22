import { testimonials } from "@/const/testimonials";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

const Testimonials = () => {
  const router = useRouter();
  return (
    <div className="tt-section border-bottom">
      <div className="tt-section-inner tt-wrap">
        <div className="tt-sticker">
          <div className="tt-row">
            <div className="tt-col-lg-4 margin-bottom-40">
              <div className="tt-sticker-sticky tt-sticky-element">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push(
                      "https://www.google.com/search?q=Elegant+-+Trading+-+Academy+reviews&rlz=1C1ONGR_enIN1115IN1116&oq=Elegant+-+Trading+-+Academy+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDcwOTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x3bae11bf3662d24b:0x7fb02d3df55bb5f9,1,,,,",
                    );
                  }}
                  className="tt-heading tt-heading-xxlg"
                >
                  <h3 className="tt-heading-subtitle flex items-center gap-2 tt-text-reveal">
                    Testimonials{" "}
                    <AiFillGoogleCircle className="text-2xl float-left -mt-1 mr-2" />
                  </h3>
                  <h2 className="tt-heading-title tt-text-reveal">
                    Word From
                    <br />
                    Our Client
                  </h2>
                  <p className="max-width-500 flex items-center gap-2 tt-text-uppercase tt-text-reveal">
                    from <b className="font-bold">google</b> reviews
                  </p>
                </div>
                {/* <a
                  href="dummy.html"
                  className="tt-btn tt-btn-outline tt-magnetic-item tt-anim-fadeinup"
                >
                  <span data-hover="Read More">Read More</span>
                </a> */}
              </div>
            </div>

            <div className="tt-col-lg-8">
              <div className="tt-sticker-scroller">
                <div className="tt-sticky-testimonials tt-stte-reversed-colors">
                  {testimonials.map((testimonial, index) => (
                    <div className="tt-stte-item" key={index}>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push(
                            "https://www.google.com/search?q=Elegant+-+Trading+-+Academy+reviews&rlz=1C1ONGR_enIN1115IN1116&oq=Elegant+-+Trading+-+Academy+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDcwOTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x3bae11bf3662d24b:0x7fb02d3df55bb5f9,1,,,,",
                          );
                        }}
                        className="tt-stte-card cursor-alter"
                      >
                        <div className="tt-stte-card-counter"></div>
                        <div className="tt-stte-card-caption">
                          <div className="tt-stte-text">{testimonial.text}</div>
                          <div className="tt-stte-stars">
                            {Array.from(
                              { length: testimonial.stars },
                              (_, i) => (
                                <span style={{color:"yellow",marginTop:".4rem" }} key={i}>★</span>
                              ),
                            )}
                          </div>
                          <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"1rem"
                          }} className="tt-stte-subtext flex items-center gap-2">
                            <Image
                              width={100}
                              height={100}
                              src={testimonial.image}
                              alt={""}
                              style={{
                                width: "2rem",
                                height: "2rem",
                                borderRadius:"50%"
                              }}
                              className="w-8 h-8"
                            />
                            
                              {testimonial.name}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
