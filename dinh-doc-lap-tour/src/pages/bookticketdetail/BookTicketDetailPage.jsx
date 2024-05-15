import React, { useState, useEffect } from "react";
import dinhDocLapImg from "./../../assets/images/dinh-doc-lap.jpg";
import "./BookTicketDetailStyle.css";
import axios from "axios"; // Thêm thư viện axios
import cookie from "js-cookie";

function BookTicketDetailPage() {
  const [formData, setFormData] = useState({
        id: 0,
        mave: "",
        bookingDate:new Date(),
        venguoilon: 0,
        vetreem: 0,
        status: 0,
        treemPrice: 0,
        nguoilonPrice: 0,
      });

      const [userData, setUserData] = useState({
        name: "",
        phone: "",
        id: "",
        email: "",
      })

      const id = 1;
      useEffect(() => {
        const fetchData = () => {
          axios
            .get(`http://localhost:9090/api/bookings/${id}`)
            .then((response) => {
              setUserData(response.data.user);
      
              let vetrememQuantity = 0;
              let venguoilonQuantity = 0;
              let treemPrice = 0;
              let nguoilonPrice =0;
      
              response.data.bookingDetails.forEach((detail) => {
                const { type } = detail.ticket;
                const quantity = detail.quantity;
                const price = detail.ticket.price;
      
                if (type === "Trẻ em") {
                  vetrememQuantity += quantity;
                  treemPrice += price * quantity
                } else if (type === "Người lớn") {
                  venguoilonQuantity += quantity;
                  nguoilonPrice += price * quantity
                }
              },
              );
              cookie.set("totalPrice",(treemPrice+nguoilonPrice).toString());
              setFormData({
                ...response.data,
                vetreem: vetrememQuantity, // Initialize vetreem
                venguoilon: venguoilonQuantity,
                treemPrice: treemPrice,
                nguoilonPrice: nguoilonPrice,
                bookingDate: new Date(response.data.bookingDate), // Convert to Date object
              });
            })
            .catch((error) => {
              console.error("Lỗi khi tải dữ liệu từ API:", error);
            });
        };
      
        fetchData();
      }, []); // Passing an empty dependency array

  return (
    <div className="flex w-full container">
      <div className="grid col-5 py-8 px-8 mt-10">
        <h1 className="dark semi-b fs-35">DI TÍCH LỊCH SỬ</h1>
        <h2 className="yellow semi-b fs-60">DINH ĐỘC LẬP</h2>
        <h1 className="dark semi-b fs-35">THE INDEPENDENCE PALACE</h1>
        <div className="flex justify-center">
          <img src={dinhDocLapImg} alt="" width={500} />
        </div>
      </div>
      <div className="grid col-7 py-8 px-8 info-card">
        <ul className="bg-blue py-8 px-8">
          <li>Mã đặt vé: {formData.id}</li>
          <li>
            Ngày đặt: <span>{formData.bookingDate?.toLocaleDateString('vi-VN')}</span>
          </li>
          <li>Thông tin khách hàng:</li>
          <div className="client-info">
          <div className="flex justify-between">
            <div className="unset-p dark-blue">
              Họ và tên: <span>{userData.name}</span>
            </div>
            <div className="w-1/5 unset-p dark-blue">
              ID: <span>{userData.id}</span>
            </div>
          </div>
          <div className="dark-blue">
            SĐT: <span>{userData.phone}</span>
          </div>
          <div className="dark-blue">
            Email: <span>{userData.email}</span>
          </div>
          </div>
          <li>
            Số lượng mỗi loại vé:{" "}
            <span>
              Người lớn - {formData.venguoilon}, Trẻ em - {formData.vetreem}
            </span>
          </li>
          <li>
            Tổng tiền từng loại vé:{" "}
            <span>Người lớn - {formData.nguoilonPrice}đ, Trẻ em - {formData.treemPrice}đ</span>
          </li>
          <li>
            Tổng số lượng vé:{" "}
            <span>{formData.venguoilon + formData.vetreem}</span>
          </li>
          <li>
            Tổng tiền: <span>{(formData.nguoilonPrice + formData.treemPrice).toLocaleString()}đ</span>
          </li>
          <li>
            Trạng thái đặt vé: <span className="green">{formData.status === 0 ? "Đã duyệt" : "Chờ duyệt"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookTicketDetailPage;
