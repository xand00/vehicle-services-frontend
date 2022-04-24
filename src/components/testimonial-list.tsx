import { Testimonial } from "@/types/vehicle-services-models/testimonial"
import React from "react"

type TestimonialListProps = {
  testimonialList: Testimonial[]
}

const TestimonialList: React.FC<TestimonialListProps> = ({ testimonialList = [] }) => {
  return (
    <div className="m-12">
      <div className="text-xl text-center lg:text-left font-bold mb-12">
        Отзывы
      </div>
      <div className="grid grid-row-auto xl:grid-cols-3 2xl:grid-cols-6 gap-6">
        {testimonialList.map((testimonial, index) => {
          return (
            <div key={testimonial.clientName}>
              <div className="font-bold py-2">{testimonial.clientName}</div>
              <p className="italic py-2">{testimonial.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TestimonialList
