import Header from "@/components/Header";
import React from "react";

const page = () => {
   return (
      <div>
        <Header/>
         <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>

            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="mb-4">
               Welcome to our cozy corner of the internet! Our mission is
               simple: to make finding the perfect flatshare as easy as brewing
               a cup of coffee. We believe that everyone deserves a place they
               can call home, and we're here to help you find yours. Whether
               you're a student, a young professional, or just someone looking
               for a change of scenery, we've got you covered.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
            <p className="mb-4">
               We're a small but mighty team of flatshare enthusiasts. We come
               from all walks of life, but we all share a common passion:
               helping people find their perfect home. We work tirelessly to
               ensure that our platform is easy to use, safe, and effective.
               We're always here to help, so don't hesitate to reach out if you
               have any questions!
            </p>

            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">
               Got a question? We'd love to hear from you! You can reach us at
               our email: hello@flatshare.com, or give us a call at (123)
               456-7890. Don't forget to follow us on our social media channels
               for the latest updates and flatshare tips!
            </p>
         </div>
      </div>
   );
};

export default page;
