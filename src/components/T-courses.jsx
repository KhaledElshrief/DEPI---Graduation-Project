import React from "react";
import photo from "../images/Lectures-Covers-3.webp";
export default function Tcourses() {
  return (
    <section className="container-md one">
      <h3 className="text-center justify-content-center">
        دورات مجانية للمدرسين
      </h3>
      <div className="courses">
        <div className="course col-9 col-sm-6 col-md-4 col-lg-2">
          <img src={photo} className="card-img-top" width="10px" alt="course" />
          <div className="card-body">
            <p className="soft">مدرسين</p>
            <a href="#">ازاي اكون مدرس علي خصوصي ؟</a>
            <hr />
            <p>
              30 <i className="fa-regular fa-clock"> مجانا</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
