import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
function DESCRIPTION() {
  const [first, setfirst] = useState(1);
  return (
    <section className="">
      <Container>
        <div className=" flex-row align-items-center">
          <button
            onClick={() => setfirst(1)}
            className="ff_poppins  fw-normal border-0 bg-white fs_xl text-black clr_hover_red hover_line position-relative me-md-5   me-sm-5 me-3"
          >
            DESCRIPTIONs
          </button>
          <button
            onClick={() => setfirst(2)}
            className="ff_poppins fw-normal border-0 bg-white fs_xl text-black clr_hover_red hover_line position-relative ms-md-0 me-md-5 me-sm-5 me-3 mt-2"
          >
            ADDITIONAL INFORMATION{" "}
          </button>{" "}
          <button
            onClick={() => setfirst(3)}
            className="ff_poppins fw-normal border-0 bg-white fs_xl text-black clr_hover_red hover_line position-relative ms-md-0 me-md-5 me-sm-5 mt-2 mt-md-0"
          >
            REVIEWS (1)
          </button>{" "}
        </div>
        <p
          className={
            first == 1 ? " paragrahp_common pt-lg-4 pt-2" : "d-none"
          }
        >
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
          ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi
          euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
          Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}
        </p>
        <p
          className={
            first == 2 ? " paragrahp_common pt-lg-4 pt-2" : "d-none"
          }
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          aliquid architecto id, earum officia non explicabo quam excepturi
          impedit iste vitae esse saepe veritatis totam at accusantium neque
          similique sit laudantium expedita, quisquam perferendis exercitationem
          tenetur mollitia. Ea omnis et sapiente quam voluptatem distinctio
          exercitationem nostrum, voluptas placeat reprehenderit voluptate?
        </p>
        <p
          className={
            first == 3 ? " paragrahp_common pt-lg-4 pt-2" : "d-none"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptatibus incidunt ut reiciendis nemo dolorum dolore, fugit
          corporis odit, laborum laudantium cum omnis distinctio velit in id!
          Maiores beatae quaerat eveniet quam placeat, voluptates eum laborum
          veritatis cum nam. Repudiandae voluptatem sequi veniam saepe veritatis
          numquam quisquam unde, harum, repellendus iste soluta optio sit rem.
          Ab nulla doloribus porro nisi!
        </p>
      </Container>
    </section>
  );
}

export default DESCRIPTION;
