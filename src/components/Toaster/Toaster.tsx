import type { ReactNode } from "react";
import { Slide, ToastContainer } from "react-toastify";

export default function Toaster () : ReactNode {
    return <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
}