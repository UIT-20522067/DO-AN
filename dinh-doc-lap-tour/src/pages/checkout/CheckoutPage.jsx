import React, { useState, useEffect } from "react";
import dinhDocLapImg from "./../../assets/images/dinh-doc-lap.jpg";
import "./CheckoutStyle.css";
import momosample from "./../../assets/images/momo-sample.png";
import cookie from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const [countdown, setCountdown] = useState({
    minutes: 10, // Set the initial minutes
    seconds: 0, // Set the initial seconds
  });

  const navigate = useNavigate();

  const totalPrice = cookie.get("totalPrice");

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown.seconds > 0) {
        setCountdown((prevCountdown) => ({
          ...prevCountdown,
          seconds: prevCountdown.seconds - 1,
        }));
      } else {
        if (countdown.minutes === 0) {
          clearInterval(interval);
          fail();
        } else {
          setCountdown((prevCountdown) => ({
            minutes: prevCountdown.minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [countdown]);

  const [formData, setFormData] = useState({
    mave: "YYSDKSADLASHD",
    date: "04/10/2023",
    name: "Trần Quốc Anh",
    phone: "0169287165",
    id: "041002",
    email: "dqt096@gmail.com",
    venguoilon: 2,
    vetreem: 3,
    status: "Đã Duyệt",
  });

  const swalCustom = Swal.mixin({
    customClass: {
      cancelButton: "cancel",
      confirmButton: "confirm",
    },
    buttonsStyling: false,
  });

  const success = () => {
    swalCustom
      .fire({
        title: "Thanh toán thành công!",
        text: "Chúng tôi sẽ tiến hành xác nhận trong vòng 24h.Nếu có bất kỳ lỗi gì từ phía chúng tôi hoặc bạn thanh toán THIẾU thì chúng tôi sẽ hoàn trả lại tiền.",
        imageUrl: "assets/images/success.png",
        imageWidth: 80,
        imageHeight: 80,
        showCloseButton: true,
        width: 600,
        backdrop: `rgba(217, 217, 217, 0.87)`,
        confirmButtonText: "Xem thông tin chi tiết vé",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/chitiet-datve");
        }
      });
  };

  const fail = () => {
    swalCustom
      .fire({
        title: "Thanh toán thất bại!",
        text: "Có lẽ bạn đã thanh toán sau thời gian quy định",
        imageUrl: "assets/images/fail.png",
        imageWidth: 90,
        imageHeight: 80,
        showCloseButton: true,
        width: 600,
        backdrop: `rgba(217, 217, 217, 0.87)`,
        showCancelButton: true,
        cancelButtonText: "Thử lại",
        confirmButtonText: "Về trang chủ",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        } else if (result.isDismissed) {
          navigate("/huongdan-thanhtoan");
        }
      });
  };


  const handleBack = () => {
      fail();
  }

  const handlePayment = () => {
    success();
}

  return (
    <div className="w-full bg-gray container">
      <div className="flex justify-between px-16 py-12">
        <div className="col-5">
          <div className="grid payment-info w-full px-12">
            <p className="justify-center flex b fs-25 py-6">
              THÔNG TIN THANH TOÁN
            </p>
            <div>
              <h1>Nhà cung cấp</h1>
              <h2 className="flex align-center">
                <img src={dinhDocLapImg} width={150} className="px-6" />
                BAN QUAN LY DINH DOC LAP
              </h2>
              <hr />
            </div>
            <div>
              <h1>Mã đặt vé</h1>
              <h3>{formData.mave}</h3>
              <hr />
            </div>
            <div>
              <h1>Nội dung chuyển tiền</h1>
              <h3>{formData.mave}</h3>
              <h5>
                <i>Lưu ý: Vui lòng nhập nội dung là Mã đặt vé của bạn</i>
              </h5>
              <hr />
            </div>
            <div className="payment-price">
              <h1>Số tiền</h1>
              <h2>
                {totalPrice+" "}vnđ 
              </h2>
            </div>
          </div>
        </div>
        <div className="grid py-12 justify-items-center">
          <img src={momosample} className="img-payment" />
          <div>
          <button className="btn-pay py-16 mt-8" onClick={handlePayment}>Thanh toán</button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="expire-time grid py-2 col-4">
          <p className="text-center py-3">Đơn hàng sẽ hết hạn sau:</p>
          <div className="flex justify-center">
            <div className="grid justify-items-center">
              <h1>{countdown.minutes}</h1>
              <h2>Phút</h2>
            </div>
            <div className="grid justify-items-center">
              <h1>{countdown.seconds}</h1>
              <h2>Giây</h2>
            </div>
          </div>
        </div>
        <button className="btn-quayve col-2" onClick={handleBack}>
          Quay về
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
