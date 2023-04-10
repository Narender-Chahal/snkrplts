import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
function DESCRIPTION() {
  const [first, setfirst] = useState(1);
  return (
    <section data-aos="fade-up" data-aos-duration="3000">
      <Container>
        <div className=" flex-sm-row d-flex d-sm-block align-items-start align-items-sm-center flex-column">
          <button
            onClick={() => setfirst(1)}
            className={
              first === 1
                ? "active_red ff_poppins bg-transparent hover_line fw-normal border-0 fs_xl position-relative me-md-5 fs_xsm_22  me-sm-5 me-3 "
                : " ff_poppins bg-transparent fw-normal border-0 fs_xl position-relative me-md-5 fs_xsm_22  me-sm-5 me-3"
            }
          >
            DESCRIPTIONs
          </button>
          <button
            onClick={() => setfirst(2)}
            className={
              first === 2
                ? "active_red ff_poppins bg-transparent hover_line fw-normal border-0 fs_xl position-relative me-md-5  fs_xsm_22 me-sm-5 me-3 mt-2 mt-sm-0"
                : " ff_poppins bg-transparent  fw-normal border-0 fs_xl position-relative me-md-5 fs_xsm_22  me-sm-5 me-3 mt-2 mt-sm-0"
            }
          >
            ADDITIONAL INFORMATION{" "}
          </button>{" "}
          <button
            onClick={() => setfirst(3)}
            className={
              first === 3
                ? "active_red ff_poppins bg-transparent hover_line fw-normal border-0 fs_xl position-relative me-md-5 fs_xsm_22  mt-2 mt-md-0 me-sm-5 me-3"
                : " ff_poppins bg-transparent  fw-normal border-0 fs_xl position-relative me-md-5 fs_xsm_22  me-sm-5 me-3 mt-2 mt-md-0"
            }
          >
            REVIEWS (1)
          </button>{" "}
        </div>
        <p className={first == 1 ? " paragrahp_common pt-lg-4 pt-3" : "d-none"}>
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
          ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi
          euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
          Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}
        </p>
        <p className={first == 2 ? " paragrahp_common pt-lg-4 pt-3" : "d-none"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          aliquid architecto id, earum officia non explicabo quam excepturi
          impedit iste vitae esse saepe veritatis totam at accusantium neque
          similique sit laudantium expedita, quisquam perferendis exercitationem
          tenetur mollitia. Ea omnis et sapiente quam voluptatem distinctio
          exercitationem nostrum, voluptas placeat reprehenderit voluptate?
        </p>
        <p className={first == 3 ? " paragrahp_common pt-lg-4 pt-3" : "d-none"}>
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
