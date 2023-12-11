import React from "react";
import Image from "next/image";

export default function Slider(props) {

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    
                        <div class="row" id="gallery" data-toggle="modal"  and data-target="#galleryModal">
                            <div class="col-12 col-sm-6 col-lg-3" data-target="#carouselImg" data-slide-to="0">
                              <Image
                              src={props.img_src}
                              width={""}
                              height={""}
                              alt="first modal image"
                              ></Image>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3" data-target="#carouselImg" data-slide-to="0">
                               <Image
                              src={""}
                              width={""}
                              height={""}
                              alt="first modal image"
                              ></Image>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3" data-target="#carouselImg" data-slide-to="0">
                               <Image
                              src={""}
                              width={""}
                              height={""}
                              alt="first modal image"
                              ></Image>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-3" data-target="#carouselImg" data-slide-to="0">
                               <Image
                              src={""}
                              width={""}
                              height={""}
                              alt="first modal image"
                              ></Image>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
               </div>
            </div>
        </div>
    )
  };
  