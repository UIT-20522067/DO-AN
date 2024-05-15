// points for schools, towns, cities
const imgLT = 'data:image/png;base64,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'
const pointListLT = [
    {
        point: {
            type: "point",
            longitude: 106.9439049,
            latitude: 10.7855186,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Long Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9513555,
            latitude: 10.7843098,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Nguyễn Đình Chiểu",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0117677,
            latitude: 10.7030737,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Long Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0131508,
            latitude: 10.7167607,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Trung Cấp Phật Học ĐỒNG NAI ( PHÂN VIỆN NI )",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9971684,
            latitude: 10.7005579,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Cao đẳng Công nghệ Quốc tế LILAMA 2",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9060711,
            latitude: 10.7831542,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Long An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9110593,
            latitude: 10.7834477,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Thị Trấn Long Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9386482,
            latitude: 10.7874334,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Đức Ứng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0494936,
            latitude: 10.7246016,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Tân Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.939046,
            latitude: 10.7848858,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS & THPT Tri Thức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9335504,
            latitude: 10.8175618,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Long Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0085545,
            latitude: 10.7042196,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Long Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9485849,
            latitude: 10.8108843,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Long Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9361937,
            latitude: 10.8138206,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS An Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0215718,
            latitude: 10.6803193,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Phước Thái",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0558453,
            latitude: 10.6707146,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Phước Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0403955,
            latitude: 10.6707666,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Phước Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9928885,
            latitude: 10.679897,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Thái Thiện",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.044199,
            latitude: 10.6943945,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Tân Hiệp",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0769819,
            latitude: 10.7245007,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Tân Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0013913,
            latitude: 10.7177548,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Tập Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.952102296007,
            latitude: 10.785780029359353,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Long Thành A",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.94345208627689,
            latitude: 10.788285043708026,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Long Thành B",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.97339998013773,
            latitude: 10.769697389728531,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Long An (Trụ sở mới)",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95673587100602,
            latitude: 10.785277620104877,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Tri Thức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.93131909042302,
            latitude: 10.811285710080455,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học An Lợi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95613895541352,
            latitude: 10.769544786947899,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Cầu Xéo",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95522985680462,
            latitude: 10.810957114409115,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Long Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.96423670154466,
            latitude: 10.79077131731291,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Lộc An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.92167641247117,
            latitude: 10.801014183491802,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Tam An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9399383911816,
            latitude: 10.853602863776064,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học An Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.05585408748713,
            latitude: 10.855284847562077,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Bình An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.98630971632245,
            latitude: 10.732656240718985,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Long Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.94254503673884,
            latitude: 10.803409832016525,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học An Lợi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.12659526745199,
            latitude: 10.77822403317543,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Trần Quốc Toản",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95390614880003,
            latitude: 10.786348783148668,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Long Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95204892369763,
            latitude: 10.79489878810427,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Họa Mi Long Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.94295327029864,
            latitude: 10.815153819722001,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non An Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.93493039560498,
            latitude: 10.80397979558121,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.94268130128913,
            latitude: 10.791273752092343,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non ABC",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.96005690354315,
            latitude: 10.762547385867832,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Long An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.92654613117313,
            latitude: 10.808324404181686,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tam An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.98972339559077,
            latitude: 10.83594824729507,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mẫu giáo Long Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.94407278209675,
            latitude: 10.787869327066169,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm non Phan Anh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.92989221583184,
            latitude: 10.847375491317877,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm non Sơn Ca",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.94225287534972,
            latitude: 10.855904928877266,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm non Hoa Mặt Trời",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95257053486759,
            latitude: 10.857843191546674,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Họa Mi 2- An Phước Long Thành Đồng Nai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95693515020886,
            latitude: 10.782115598847424,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Mỹ Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.98949966860269,
            latitude: 10.824345007019886,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non 3",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95418810855084,
            latitude: 10.857526192583261,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Bầu Trời Xanh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9671195,
            latitude: 10.852746,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Mầm non tư thục Lô Hổ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9558888790806,
            latitude: 10.813207878140002,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Long Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.96337967908062,
            latitude: 10.769111026719521,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mẫu giáo Phúc Xá",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.96727412570709,
            latitude: 10.769841561514626,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mẫu giáo Long An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95506364779538,
            latitude: 10.810206382564981,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Anh Đào",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.05140229012478,
            latitude: 10.721870050078595,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Thái Hiệp Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.09539905269517,
            latitude: 10.674810376899478,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hương Sen",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.96920026313666,
            latitude: 10.85330170443416,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Lan",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95062049325998,
            latitude: 10.791857123878781,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Cao đẳng Công nghệ Cao Đồng Nai",
        }
    },
];
const pointListTB = [
    {
        point: {
            type: "point",
            longitude: 107.008182,
            latitude: 10.9480883,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Thống Nhất A",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9809399,
            latitude: 10.9508614,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường TH - THCS - THPT Trịnh Hoài Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9967371,
            latitude: 10.9571712,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Ngô Sĩ Liên",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9417769,
            latitude: 10.9583334,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Trần Đại Nghĩa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9950255,
            latitude: 10.9482138,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Lâm Nghiệp Đồng Nai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0616381,
            latitude: 10.9453513,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường TH - THCS - THPT TRẦN QUỐC TUẤN",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1023076,
            latitude: 10.9817776,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS - THPT Bàu Hàm",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0243163,
            latitude: 10.9799427,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Hoàng Hoa Thám",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0793467,
            latitude: 10.9368782,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Văn Lang",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0789249,
            latitude: 10.9408522,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường trung cấp Bách Khoa Đồng Nai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9816379,
            latitude: 10.9458257,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Hùng Vương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0424134,
            latitude: 10.9442383,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Phan Chu Trinh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0591055,
            latitude: 10.946603,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Công Trứ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0557128,
            latitude: 10.9474331,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Phổ Thông Dân Tộc Nội Trú Đồng Nai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9894407,
            latitude: 10.9577205,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Võ Nguyên Giáp",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9957015,
            latitude: 10.942482,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Quang Vinh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9756969,
            latitude: 10.9435761,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Lý Tự Trọng, Xã Quảng Tiến, Trảng Bom",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0842413,
            latitude: 10.97035,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Văn Trỗi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0149636,
            latitude: 10.9067255,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Bá Ngọc",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.949106,
            latitude: 10.966218,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Huỳnh Văn Nghệ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9425085,
            latitude: 10.956483,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Minh Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9345411,
            latitude: 10.960301,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Hòa Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9216552,
            latitude: 10.9720359,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Lê Đình Chinh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0639033,
            latitude: 11.0430523,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Hữu Cảnh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0605522,
            latitude: 11.0493745,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Quang Vinh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9604619,
            latitude: 10.9422004,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Đinh Tiên Hoàng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0251394,
            latitude: 10.9371629,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học An Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.052424,
            latitude: 10.9443599,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Nam Cao",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0524154,
            latitude: 10.9437842,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Nam Cao mới",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9771304,
            latitude: 10.9543166,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Trảng Bom",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0157613,
            latitude: 10.9542125,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nguyễn Tri Phương - Trảng Bom",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9747989,
            latitude: 10.9460297,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trưng Vương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.98937,
            latitude: 10.9066879,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Đồi 61",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9892019,
            latitude: 10.9799903,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Nguyễn Bỉnh Khiêm",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9551853,
            latitude: 10.9476118,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Quảng Biên",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9792856,
            latitude: 10.944293,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Bình Minh - H.Trảng Bom",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0603876,
            latitude: 11.0669649,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trung tâm",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0140931,
            latitude: 11.0056768,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Lê Văn Tám",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9437906,
            latitude: 10.9931479,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Sông Mây",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9704776,
            latitude: 10.9472314,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Cao Bá Quát",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9338156,
            latitude: 10.9565365,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Kim Đồng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.940779,
            latitude: 10.9567647,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Diên Hồng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.95936132123744,
            latitude: 10.968329991995375,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trần Quốc Toản",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.07853126528987,
            latitude: 11.048835578937666,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Tân Lập",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9418611,
            latitude: 10.9550449,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Đinh Bộ Lĩnh (phân hiệu Tân Thành)",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0492094,
            latitude: 11.035529,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Cây Điệp",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0428395,
            latitude: 10.937726,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học An Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0878453,
            latitude: 10.9661068,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Sông Thao",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0628418,
            latitude: 10.9464919,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Nguyễn Khuyến",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1007203,
            latitude: 10.9807348,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Nguyễn Thái Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0045844,
            latitude: 10.9610173,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Mai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9727045,
            latitude: 10.9425805,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ánh Dương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9263321,
            latitude: 10.9715449,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ban Mai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9925033,
            latitude: 10.9592239,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hồng Hạnh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9569235,
            latitude: 10.9389279,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Huệ Trắng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9727046,
            latitude: 10.9425153,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tư Thục Hoàng Anh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0142281,
            latitude: 10.9597814,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Vàng Anh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9554426,
            latitude: 10.9488299,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mẫu Giáo Măng Non",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9755325,
            latitude: 10.942076,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Họa Mi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.96006743160214,
            latitude: 10.978437284520764,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Lan",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.00973219890915,
            latitude: 10.948845522483769,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tuổi Thơ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0383892,
            latitude: 10.9456101,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Vành Khuyên",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9851445,
            latitude: 10.9461476,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Huệ Trắng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9806931,
            latitude: 10.9465551,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ánh Sáng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0131406,
            latitude: 10.9675912,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Như Ý",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9771138,
            latitude: 10.9449435,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Lá",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0291466,
            latitude: 10.968448,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ánh Sao",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9605572,
            latitude: 10.9828155,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ánh Sao",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0076438,
            latitude: 10.9512372,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ngôi Sao Xanh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9569718,
            latitude: 10.9715761,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Vườn Hoa Cúc",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.988368,
            latitude: 10.9483135,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Xuân",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9567419,
            latitude: 10.9809666,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Chú Ong Vàng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9988195,
            latitude: 10.9476997,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoàng Oanh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.00448435993557,
            latitude: 10.947557496619648,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Mười Giờ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9565203,
            latitude: 10.9655176,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tư thục Cúc Hoa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0204105,
            latitude: 10.9613263,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Búp Sen Hồng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9564219,
            latitude: 10.9448491,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Oanh Vũ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9998105,
            latitude: 10.9449804,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Gấu Trúc",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.957272,
            latitude: 10.9800995,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Vàng Anh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0412166,
            latitude: 10.9501927,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Song Thạch",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0140816,
            latitude: 10.97831,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Diệu Minh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0122758,
            latitude: 10.9656811,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Sắc Cầu Vồng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0207211,
            latitude: 10.9814216,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tân Lập",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9890599,
            latitude: 10.9570003,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường mẫu giáo Đinh Tiên Hoàng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9529074,
            latitude: 10.9578558,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Bé Yêu",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0275688,
            latitude: 10.9650541,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hồng Hạnh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9541296,
            latitude: 10.9630487,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non hòa nhập Ánh Chi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0101027,
            latitude: 10.9636427,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mẫu Giáo Tân Lập",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0480677,
            latitude: 10.9428008,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Sữa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9558541,
            latitude: 10.964587,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Độc lập Ánh Chi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9568115,
            latitude: 10.9412425,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Bình Minh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0088177,
            latitude: 10.9593175,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Nắng Ban Mai",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9526214,
            latitude: 10.9656115,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tuổi Thần Tiên",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.948714,
            latitude: 10.9543356,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Mai Anh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9496509,
            latitude: 10.9713461,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Mai Tiến",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0498357,
            latitude: 10.9471687,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Mimosa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9622376,
            latitude: 10.987508,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non 19 tháng 5",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9487116,
            latitude: 10.9697841,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tư Thục Như Hoa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.941479,
            latitude: 10.9632774,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non 19-5",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9430337,
            latitude: 10.9537345,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Nắng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9430013,
            latitude: 10.9669352,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ánh Dương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.947562,
            latitude: 10.9577664,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ngôi Sao",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9441008,
            latitude: 10.952541,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Đoàn Nguyễn",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9407084,
            latitude: 10.9638274,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tư thục Thỏ Ngọc",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9470752,
            latitude: 10.9450728,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Thanh Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9268062,
            latitude: 10.9704355,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Ong Vàng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9465075,
            latitude: 10.9437445,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Siêu Sao",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.933395,
            latitude: 10.9636346,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mẫu giáo Hoa Hồng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9976356,
            latitude: 10.9509068,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Mai - Cơ Sở 1",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9131953,
            latitude: 10.9805418,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Thiên Thần",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0153167,
            latitude: 10.9760053,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tuổi Hồng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.9805437,
            latitude: 10.8787562,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hoa Hồng",
        }
    },
];

// paths in polyline
const paths15 = [
    [106.828688, 10.956858], [106.832113, 10.957749],
    [106.832563, 10.957864], [106.835314, 10.958782],
    [106.839368, 10.958084], [106.842713, 10.957378],
    [106.845196, 10.956911], [106.847721, 10.956798],
    [106.852050, 10.954616], [106.855104, 10.950348],
    [106.855232, 10.949170], [106.855398, 10.948397],
    [106.855466, 10.948232], [106.856311, 10.946875],
    [106.856802, 10.946144], [106.857209, 10.945441],
    [106.857337, 10.945212], [106.857742, 10.944703],
    [106.859312, 10.943010], [106.859436, 10.942914],
    [106.859629, 10.942816], [106.860940, 10.942354],
    [106.861447, 10.942119], [106.861531, 10.942066],
    [106.862567, 10.941159], [106.863238, 10.940676],
    [106.863763, 10.940471], [106.864935, 10.940359],
    [106.866493, 10.940203], [106.867199, 10.940137],
    [106.867604, 10.940018], [106.867806, 10.939961],
    [106.868067, 10.939842], [106.868116, 10.939698],
    [106.868228, 10.939584], [106.868358, 10.939556],
    [106.868489, 10.939572], [106.868582, 10.939648],
    [106.868801, 10.939524], [106.868931, 10.939378],
    [106.869085, 10.939231], [106.869271, 10.938975],
    [106.870684, 10.937265], [106.870980, 10.937000],
    [106.872659, 10.934874], [106.875280, 10.931622],
    [106.878104, 10.928074], [106.879369, 10.926539],
    [106.880164, 10.925473], [106.880360, 10.925251],
    [106.880637, 10.924848], [106.883135, 10.919544],
    [106.884736, 10.916006], [106.885102, 10.915442],
    [106.885583, 10.914885], [106.889642, 10.910780],
    [106.889781, 10.910551], [106.889961, 10.910123],
    [106.890112, 10.909561], [106.890136, 10.909237],
    [106.889482, 10.903949], [106.889479, 10.903806],
    [106.889520, 10.903603], [106.890265, 10.901964],
    [106.890981, 10.900260], [106.891013, 10.900083],
    [106.891097, 10.898906],
]

// create an object for storing attributes related to the line 
const lineAttQL15 = {
    "Đường": "Quốc lộ 15",
    "Chiều dài": '11km'
};

// attributes for polygon
const graphicAttLT = {
    'Huyện': 'Long Thành',
    'Diện tích': '431,01 km²',
    'Dân số': '356.051 người',
}

// attributes for polygon
const graphicAttTB = {
    'Huyện': 'Trảng Bom',
    'Diện tích': '327,24 km²',
    'Dân số': '363.122 người',
}

// rings in polygon
const LTrings = [
    [106.871752, 10.824661], [106.881022, 10.812594],
    [106.880967, 10.812687], [106.881692, 10.810491],
    [106.882000, 10.808703], [106.881830, 10.806340],
    [106.881337, 10.804734], [106.880352, 10.803337],
    [106.876604, 10.799260], [106.876793, 10.799266],
    [106.873630, 10.797035], [106.868534, 10.793174],
    [106.870437, 10.790762], [106.869731, 10.789917],
    [106.868687, 10.788831], [106.868196, 10.787957],
    [106.868196, 10.787625], [106.868288, 10.786569],
    [106.869301, 10.785544], [106.870345, 10.784941],
    [106.871727, 10.784700], [106.872556, 10.784338],
    [106.873968, 10.783101], [106.874674, 10.782528],
    [106.875718, 10.781291], [106.876424, 10.780236],
    [106.876486, 10.779995], [106.876731, 10.780356],
    [106.876516, 10.781201], [106.876516, 10.782920],
    [106.876511, 10.783093], [106.877038, 10.783704],
    [106.877075, 10.783742], [106.877094, 10.783742],
    [106.877658, 10.783551], [106.878610, 10.782769],
    [106.879776, 10.782082], [106.880358, 10.781853],
    [106.880728, 10.781853], [106.882845, 10.783990],
    [106.883545, 10.784387], [106.885507, 10.784171],
    [106.887608, 10.784367], [106.888309, 10.784918],
    [106.889330, 10.784996], [106.890431, 10.784938],
    [106.891051, 10.784328], [106.891111, 10.782834],
    [106.891351, 10.782460], [106.891872, 10.782421],
    [106.893053, 10.782952], [106.893653, 10.782952],
    [106.894774, 10.782735], [106.896135, 10.781595],
    [106.897616, 10.779117], [106.897677, 10.778173],
    [106.897997, 10.777505], [106.898577, 10.777131],
    [106.899218, 10.777092], [106.899598, 10.777466],
    [106.900078, 10.777525], [106.901480, 10.776758],
    [106.907104, 10.776384], [106.908545, 10.776581],
    [106.909987, 10.775873], [106.910387, 10.775951],
    [106.911988, 10.777033], [106.912729, 10.776817],
    [106.912949, 10.775460], [106.913509, 10.774575],
    [106.914330, 10.774536], [106.914650, 10.774693],
    [106.914770, 10.776895], [106.916492, 10.778763],
    [106.919254, 10.780238], [106.920015, 10.779884],
    [106.920435, 10.779353], [106.922016, 10.779275],
    [106.923057, 10.778724], [106.923538, 10.777996],
    [106.923858, 10.777760], [106.924138, 10.776502],
    [106.925159, 10.775991], [106.928622, 10.775185],
    [106.936108, 10.773710], [106.936809, 10.772845],
    [106.937829, 10.772333], [106.938110, 10.771272],
    [106.941572, 10.771488], [106.941993, 10.770898],
    [106.941312, 10.769069], [106.941933, 10.768401],
    [106.942002, 10.766470], [106.941653, 10.764571],
    [106.941027, 10.762582], [106.941395, 10.762383],
    [106.941984, 10.762510], [106.942941, 10.762365],
    [106.943530, 10.762510], [106.943953, 10.762492],
    [106.944450, 10.761371], [106.945131, 10.761570],
    [106.945886, 10.761913], [106.948499, 10.761299],
    [106.949732, 10.760666], [106.950542, 10.760539],
    [106.953045, 10.760467], [106.955475, 10.756941],
    [106.956689, 10.754681], [106.957518, 10.752167],
    [106.957904, 10.751534], [106.958420, 10.751082],
    [106.958530, 10.750757], [106.958383, 10.750305],
    [106.958107, 10.749907], [106.957978, 10.748967],
    [106.957775, 10.748207], [106.957518, 10.747231],
    [106.956781, 10.745983], [106.956193, 10.744736],
    [106.956045, 10.742728], [106.956119, 10.740595],
    [106.956708, 10.739311], [106.957076, 10.737611],
    [106.957923, 10.736526], [106.959542, 10.733199],
    [106.961070, 10.732240], [106.962984, 10.731644],
    [106.963941, 10.731246], [106.964880, 10.730432],
    [106.965174, 10.728425], [106.965027, 10.727394],
    [106.965708, 10.725459], [106.965432, 10.724501],
    [106.965653, 10.724030], [106.967070, 10.723379],
    [106.969481, 10.721933], [106.971011, 10.720410],
    [106.971049, 10.719955], [106.971281, 10.719702],
    [106.972079, 10.719411], [106.973302, 10.719348],
    [106.973508, 10.718121], [106.973418, 10.717450],
    [106.973122, 10.716995], [106.971423, 10.716894],
    [106.971217, 10.714946], [106.971886, 10.714338],
    [106.971847, 10.713946], [106.971435, 10.713491],
    [106.971423, 10.713149], [106.971822, 10.713048],
    [106.972646, 10.712340], [106.973173, 10.710455],
    [106.973560, 10.710202], [106.974461, 10.710341],
    [106.974899, 10.711353], [106.975362, 10.711809],
    [106.975877, 10.711796], [106.976418, 10.711556],
    [106.976817, 10.710860], [106.977139, 10.709645],
    [106.977126, 10.709228], [106.976070, 10.708469],
    [106.974808, 10.707950], [106.973972, 10.707267],
    [106.973933, 10.706837], [106.974499, 10.705610],
    [106.976392, 10.702460], [106.977602, 10.701549],
    [106.977911, 10.700423], [106.977911, 10.699753],
    [106.977330, 10.698894], [106.975356, 10.697247],
    [106.974671, 10.696193], [106.973950, 10.693810],
    [106.973500, 10.692871], [106.970372, 10.690950],
    [106.970417, 10.689471], [106.970643, 10.689134],
    [106.972238, 10.689063], [106.974401, 10.689205],
    [106.975591, 10.688709], [106.976438, 10.687336],
    [106.978818, 10.685388], [106.981278, 10.683616],
    [106.983865, 10.682456], [106.986866, 10.680791],
    [106.987218, 10.680065], [106.987443, 10.676371],
    [106.987569, 10.675202], [106.988750, 10.674192],
    [106.990282, 10.672527], [106.991616, 10.668860],
    [106.992409, 10.667744], [106.993040, 10.667257],
    [106.993581, 10.667248], [106.993996, 10.667399],
    [106.996898, 10.670561], [106.997889, 10.670782],
    [106.999205, 10.670127], [107.000107, 10.669197],
    [107.000828, 10.666903], [107.001693, 10.665131],
    [107.009165, 10.662040], [107.012328, 10.661402],
    [107.015663, 10.660065], [107.016970, 10.659250],
    [107.017574, 10.657585], [107.017358, 10.655778],
    [107.013653, 10.650629], [107.013023, 10.646232],
    [107.013171, 10.643670], [107.038285, 10.654478],
    [107.040077, 10.655717], [107.045941, 10.657498],
    [107.050652, 10.658401], [107.052923, 10.658646],
    [107.054837, 10.658454], [107.056387, 10.657818],
    [107.058569, 10.657159], [107.061294, 10.657712],
    [107.062727, 10.657274], [107.064141, 10.656724],
    [107.065123, 10.655621], [107.065433, 10.654577],
    [107.066050, 10.653859], [107.067531, 10.653558],
    [107.069610, 10.653439], [107.073994, 10.653921],
    [107.076094, 10.653553], [107.077799, 10.653584],
    [107.079668, 10.653619], [107.082820, 10.653307],
    [107.086389, 10.653128], [107.091615, 10.653012],
    [107.0933966, 10.65289], [107.096069, 10.651780],
    [107.097424, 10.653971], [107.098778, 10.656905],
    [107.100504, 10.658979], [107.100688, 10.660991],
    [107.100598, 10.663084], [107.101418, 10.663018],
    [107.102592, 10.663827], [107.103729, 10.663828],
    [107.105362, 10.664004], [107.106818, 10.664955],
    [107.107456, 10.666432], [107.107598, 10.666678],
    [107.108952, 10.667909], [107.109659, 10.668930],
    [107.110268, 10.669496], [107.111762, 10.670059],
    [107.112968, 10.670620], [107.113683, 10.670727],
    [107.114641, 10.670693], [107.116946, 10.671115],
    [107.117442, 10.672240], [107.118374, 10.672595],
    [107.118727, 10.672662], [107.119968, 10.673509],
    [107.120539, 10.673756], [107.120859, 10.674319],
    [107.121107, 10.675547], [107.121679, 10.675797],
    [107.122101, 10.676182], [107.122242, 10.677270],
    [107.122955, 10.677589], [107.123203, 10.678857],
    [107.124379, 10.680514], [107.125266, 10.682268],
    [107.125586, 10.682588], [107.126515, 10.682730],
    [107.127967, 10.682869], [107.129567, 10.683786],
    [107.130966, 10.684034], [107.131142, 10.684052],
    [107.132521, 10.684207], [107.133513, 10.684875],
    [107.133618, 10.686091], [107.133647, 10.687953],
    [107.133686, 10.690008], [107.134259, 10.693173],
    [107.134044, 10.694544], [107.134079, 10.695075],
    [107.135608, 10.698521], [107.136215, 10.699510],
    [107.136925, 10.702255], [107.136889, 10.703310],
    [107.137210, 10.704402], [107.137528, 10.704823],
    [107.137778, 10.706794], [107.137992, 10.707462],
    [107.138812, 10.708624], [107.139316, 10.709001],
    [107.139104, 10.718001], [107.140537, 10.718358],
    [107.140282, 10.7193575], [107.139966, 10.719344],
    [107.139392, 10.719909], [107.139035, 10.720546],
    [107.138819, 10.725654], [107.138968, 10.727429],
    [107.139832, 10.727075], [107.140909, 10.726007],
    [107.141838, 10.724949], [107.142050, 10.724455],
    [107.142479, 10.723886], [107.142836, 10.723816],
    [107.143406, 10.723888], [107.144193, 10.724382],
    [107.144694, 10.724736], [107.144980, 10.725159],
    [107.145050, 10.725654], [107.144338, 10.726714],
    [107.143120, 10.727777], [107.142901, 10.728351],
    [107.142973, 10.728987], [107.143404, 10.729486],
    [107.144553, 10.730055], [107.145697, 10.729772],
    [107.145627, 10.730614], [107.144128, 10.731392],
    [107.143479, 10.731960], [107.141620, 10.731820],
    [107.140046, 10.731957], [107.138967, 10.732103],
    [107.138998, 10.732805], [107.139036, 10.733519],
    [107.138823, 10.735506], [107.138533, 10.736570],
    [107.138535, 10.741888], [107.138751, 10.742950],
    [107.138824, 10.744012], [107.138122, 10.744740],
    [107.137368, 10.744739], [107.136434, 10.744322],
    [107.135844, 10.743903], [107.135418, 10.744153],
    [107.135248, 10.744738], [107.134323, 10.744656],
    [107.133824, 10.744654], [107.132467, 10.744821],
    [107.131878, 10.744571], [107.131198, 10.744402],
    [107.130353, 10.744484], [107.129674, 10.744906],
    [107.127564, 10.746494], [107.124106, 10.746490],
    [107.123513, 10.746242], [107.123346, 10.745910],
    [107.123004, 10.745570], [107.122327, 10.745988],
    [107.121993, 10.745909], [107.121662, 10.745660],
    [107.121148, 10.745404], [107.119879, 10.745322],
    [107.119203, 10.744984], [107.118357, 10.744985],
    [107.118021, 10.745070], [107.117856, 10.744487],
    [107.117430, 10.744153], [107.116832, 10.744152],
    [107.116494, 10.744318], [107.116492, 10.744903],
    [107.116160, 10.745235], [107.115913, 10.744903],
    [107.115660, 10.744654], [107.115230, 10.744568],
    [107.114805, 10.744654], [107.114715, 10.745073],
    [107.114717, 10.745488], [107.113795, 10.745654],
    [107.113293, 10.745570], [107.112196, 10.744815],
    [107.110420, 10.744651], [107.109913, 10.744235],
    [107.107797, 10.744234], [107.107037, 10.744150],
    [107.106278, 10.743645], [107.105596, 10.744147],
    [107.105096, 10.744145], [107.104761, 10.743809],
    [107.104164, 10.743811], [107.103233, 10.744480],
    [107.101545, 10.744481], [107.100867, 10.744232],
    [107.100779, 10.744482], [107.100948, 10.744818],
    [107.100951, 10.745152], [107.100779, 10.745569],
    [107.099938, 10.746405], [107.099264, 10.746820],
    [107.098671, 10.747072], [107.098161, 10.747405],
    [107.097912, 10.747909], [107.097572, 10.748492],
    [107.096897, 10.748575], [107.096560, 10.748576],
    [107.096391, 10.748821], [107.096220, 10.749244],
    [107.095547, 10.749577], [107.095120, 10.749912],
    [107.095117, 10.750418], [107.095289, 10.750588],
    [107.095800, 10.750842], [107.096302, 10.750840],
    [107.095966, 10.751507], [107.095627, 10.752089],
    [107.094616, 10.753425], [107.094192, 10.754599],
    [107.094192, 10.754931], [107.094445, 10.755437],
    [107.094530, 10.755937], [107.094699, 10.756525],
    [107.094699, 10.756937], [107.094365, 10.757270],
    [107.093941, 10.757436], [107.093438, 10.757692],
    [107.093183, 10.757692], [107.092759, 10.758105],
    [107.092084, 10.758690], [107.091828, 10.759026],
    [107.091239, 10.759365], [107.090983, 10.760030],
    [107.090985, 10.761785], [107.090564, 10.761953],
    [107.090060, 10.762205], [107.089970, 10.762706],
    [107.090140, 10.763459], [107.089887, 10.763874],
    [107.089551, 10.763960], [107.089215, 10.763707],
    [107.088525, 10.763587], [107.088449, 10.763707],
    [107.088448, 10.764295], [107.088452, 10.765046],
    [107.087269, 10.765047], [107.086843, 10.765464],
    [107.086509, 10.765879], [107.086167, 10.766218],
    [107.086087, 10.766634], [107.086086, 10.767222],
    [107.086681, 10.767386], [107.087105, 10.767054],
    [107.087354, 10.766553], [107.088281, 10.766722],
    [107.088621, 10.766888], [107.088791, 10.767137],
    [107.088538, 10.767471], [107.088115, 10.767639],
    [107.088115, 10.767975], [107.088199, 10.768309],
    [107.088705, 10.768307], [107.089211, 10.768060],
    [107.089805, 10.768056], [107.090225, 10.768141],
    [107.090478, 10.768643], [107.090479, 10.769145],
    [107.090734, 10.769480], [107.091920, 10.769648],
    [107.092930, 10.769482], [107.094113, 10.769648],
    [107.094961, 10.770065], [107.095805, 10.770903],
    [107.096393, 10.771573], [107.097575, 10.771574],
    [107.099185, 10.771155], [107.100196, 10.770486],
    [107.100282, 10.769400], [107.101039, 10.768898],
    [107.102561, 10.768228], [107.103236, 10.768482],
    [107.103745, 10.768483], [107.104250, 10.768231],
    [107.104421, 10.768060], [107.104759, 10.766894],
    [107.105432, 10.766474], [107.107799, 10.766476],
    [107.109152, 10.766895], [107.109576, 10.766393],
    [107.110081, 10.766060], [107.110590, 10.766226],
    [107.111347, 10.766895], [107.112869, 10.767647],
    [107.113460, 10.768068], [107.114053, 10.768234],
    [107.115741, 10.767984], [107.116331, 10.767650],
    [107.117007, 10.767567], [107.117433, 10.768064],
    [107.117684, 10.768153], [107.118028, 10.767982],
    [107.118782, 10.767485], [107.119373, 10.767231],
    [107.120556, 10.767233], [107.121402, 10.767733],
    [107.123260, 10.767818], [107.123263, 10.767238],
    [107.124017, 10.767818], [107.124528, 10.768153],
    [107.125204, 10.769075], [107.125372, 10.769576],
    [107.127146, 10.769659], [107.128583, 10.770076],
    [107.130271, 10.772582], [107.131370, 10.773924],
    [107.132217, 10.775430], [107.132051, 10.781947],
    [107.131881, 10.784122], [107.131036, 10.784791],
    [107.130529, 10.785711], [107.130108, 10.786297],
    [107.129852, 10.786965], [107.129853, 10.788471],
    [107.130022, 10.789307], [107.130277, 10.789978],
    [107.130868, 10.790560], [107.130618, 10.791395],
    [107.129095, 10.792984], [107.128251, 10.793984],
    [107.127321, 10.794487], [107.125379, 10.793736],
    [107.124789, 10.793317], [107.123857, 10.793401],
    [107.123688, 10.793987], [107.123770, 10.794740],
    [107.124110, 10.795408], [107.124109, 10.795908],
    [107.123943, 10.796157], [107.123267, 10.796323],
    [107.122589, 10.796577], [107.122167, 10.796996],
    [107.121744, 10.798419], [107.121744, 10.800089],
    [107.121662, 10.801092], [107.120479, 10.801088],
    [107.120057, 10.801258], [107.119380, 10.801592],
    [107.118702, 10.802094], [107.118701, 10.802429],
    [107.118955, 10.803259], [107.118202, 10.802929],
    [107.116848, 10.802761], [107.114983, 10.802678],
    [107.113806, 10.802677], [107.112791, 10.802091],
    [107.111524, 10.802006], [107.110089, 10.801589],
    [107.108822, 10.800083], [107.107891, 10.799331],
    [107.106877, 10.799332], [107.105857, 10.799582],
    [107.105107, 10.799917], [107.104594, 10.800084],
    [107.104170, 10.800419], [107.103499, 10.800669],
    [107.102062, 10.800666], [107.101133, 10.800917],
    [107.100032, 10.801667], [107.099607, 10.802173],
    [107.099189, 10.802923], [107.098595, 10.803590],
    [107.098171, 10.803842], [107.097327, 10.803927],
    [107.096822, 10.803927], [107.095556, 10.803595],
    [107.095132, 10.803341], [107.094795, 10.802758],
    [107.094119, 10.802672], [107.093438, 10.803005],
    [107.093102, 10.803676], [107.092932, 10.804341],
    [107.092511, 10.805098], [107.092259, 10.805679],
    [107.091924, 10.806350], [107.090906, 10.807687],
    [107.090400, 10.808019], [107.089555, 10.808271],
    [107.089130, 10.808774], [107.089129, 10.809276],
    [107.089214, 10.809860], [107.089218, 10.810615],
    [107.088543, 10.810861], [107.087949, 10.811200],
    [107.087022, 10.811365], [107.086433, 10.810947],
    [107.085925, 10.810443], [107.084993, 10.810276],
    [107.084485, 10.809859], [107.083893, 10.809855],
    [107.083049, 10.810275], [107.082459, 10.810946],
    [107.082034, 10.811534], [107.081019, 10.812117],
    [107.080090, 10.812783], [107.079328, 10.812699],
    [107.078738, 10.812701], [107.078313, 10.813203],
    [107.078144, 10.813785], [107.078063, 10.814540],
    [107.077726, 10.815126], [107.077389, 10.815628],
    [107.077302, 10.816126], [107.077048, 10.816963],
    [107.076627, 10.817129], [107.075952, 10.817046],
    [107.075697, 10.817214], [107.075527, 10.817795],
    [107.075191, 10.818385], [107.074603, 10.818717],
    [107.074007, 10.819135], [107.072829, 10.819302],
    [107.072149, 10.819301], [107.071728, 10.819723],
    [107.072146, 10.820477], [107.072911, 10.821480],
    [107.073079, 10.823066], [107.073077, 10.824152],
    [107.072571, 10.825489], [107.072400, 10.827165],
    [107.072401, 10.828918], [107.072147, 10.831341],
    [107.072148, 10.835190], [107.072395, 10.836194],
    [107.075776, 10.837453], [107.076799, 10.838880],
    [107.078145, 10.840213], [107.078829, 10.840800],
    [107.079414, 10.841130], [107.080770, 10.842302],
    [107.081371, 10.842302], [107.082634, 10.842054],
    [107.083052, 10.841464], [107.083728, 10.841801],
    [107.084318, 10.842718], [107.084404, 10.843303],
    [107.084399, 10.844312], [107.084740, 10.845144],
    [107.084487, 10.845726], [107.082970, 10.846648],
    [107.082036, 10.846888], [107.081446, 10.847731],
    [107.081342, 10.848795], [107.080888, 10.848972],
    [107.079533, 10.849151], [107.077634, 10.850858],
    [107.076819, 10.851121], [107.075912, 10.851219],
    [107.074014, 10.851214], [107.070655, 10.851937],
    [107.068570, 10.851491], [107.068117, 10.851762],
    [107.068023, 10.852568], [107.067658, 10.853171],
    [107.067516, 10.853126], [107.067409, 10.853116],
    [107.067286, 10.853068], [107.067141, 10.852905],
    [107.066835, 10.852086], [107.066800, 10.851883],
    [107.066808, 10.851756], [107.066843, 10.851614],
    [107.066940, 10.851506], [107.066980, 10.851366],
    [107.066948, 10.851182], [107.066814, 10.851008],
    [107.066626, 10.850890], [107.066433, 10.850876],
    [107.066320, 10.850908], [107.066081, 10.851008],
    [107.065950, 10.851011], [107.065703, 10.850811],
    [107.065609, 10.850434], [107.065497, 10.850273],
    [107.065282, 10.850089], [107.065027, 10.849962],
    [107.064805, 10.849960], [107.064601, 10.850010],
    [107.064032, 10.850373], [107.063592, 10.850436],
    [107.063324, 10.850415], [107.062884, 10.850226],
    [107.062718, 10.850076], [107.062600, 10.849899],
    [107.062530, 10.849675], [107.062627, 10.849301],
    [107.062662, 10.848866], [107.062605, 10.848756],
    [107.062484, 10.848679], [107.062312, 10.848657],
    [107.061816, 10.848684], [107.060291, 10.849159],
    [107.060133, 10.849169], [107.060012, 10.849248],
    [107.059792, 10.849193], [107.058395, 10.849230],
    [107.058051, 10.849180], [107.057730, 10.849003],
    [107.057445, 10.848893], [107.057196, 10.848851],
    [107.057021, 10.848866], [107.057013, 10.848866],
    [107.056461, 10.849127], [107.055364, 10.849222],
    [107.054846, 10.849364], [107.054618, 10.849401],
    [107.054428, 10.849380], [107.054331, 10.849375],
    [107.054138, 10.849254], [107.053859, 10.848766],
    [107.053650, 10.848692], [107.053355, 10.848719],
    [107.053073, 10.848872], [107.052912, 10.849117],
    [107.052885, 10.849770], [107.052915, 10.850876],
    [107.052765, 10.851297], [107.052075, 10.851919],
    [107.051855, 10.852211], [107.051646, 10.852970],
    [107.051724, 10.853494], [107.052322, 10.853992],
    [107.052614, 10.854506], [107.052641, 10.854693],
    [107.052585, 10.855012], [107.052207, 10.855583],
    [107.052097, 10.855649], [107.051939, 10.855607],
    [107.051622, 10.855251], [107.051488, 10.855233],
    [107.051327, 10.855278], [107.051177, 10.855367],
    [107.051123, 10.855723], [107.051212, 10.856292],
    [107.051727, 10.857198], [107.052022, 10.857835],
    [107.052057, 10.858025], [107.051928, 10.858233],
    [107.051416, 10.858462], [107.051182, 10.858365],
    [107.051155, 10.858236], [107.051158, 10.857691],
    [107.051126, 10.857543], [107.051064, 10.857448],
    [107.050922, 10.857419], [107.050783, 10.857432],
    [107.050560, 10.857770], [107.050466, 10.858102],
    [107.050099, 10.858510], [107.049310, 10.858805],
    [107.049205, 10.858881], [107.049053, 10.859197],
    [107.049042, 10.859276], [107.049203, 10.859574],
    [107.049659, 10.859938], [107.049927, 10.860235],
    [107.049981, 10.860364], [107.049967, 10.860451],
    [107.049884, 10.860501], [107.048870, 10.860578],
    [107.048766, 10.860630], [107.048559, 10.861639],
    [107.048422, 10.861847], [107.048272, 10.861940],
    [107.048039, 10.861990], [107.047601, 10.861816],
    [107.047365, 10.861810], [107.047137, 10.861913],
    [107.046660, 10.862335], [107.046590, 10.862474],
    [107.046620, 10.863004], [107.046558, 10.863662],
    [107.044109, 10.865580], [107.043940, 10.866030],
    [107.042755, 10.865943], [107.038229, 10.866224],
    [107.033528, 10.866132], [107.029247, 10.866317],
    [107.025997, 10.866679], [107.025273, 10.867037],
    [107.023999, 10.867048], [107.021836, 10.867403],
    [107.003237, 10.867505], [107.000441, 10.867692],
    [106.999902, 10.867689], [106.998993, 10.867233],
    [106.997817, 10.867237], [106.997366, 10.867150],
    [106.987112, 10.859358], [106.986294, 10.858552],
    [106.976882, 10.871278], [106.965904, 10.863489],
    [106.957495, 10.860344], [106.939048, 10.856021],
    [106.934481, 10.854265], [106.9283742, 10.8528677],
    [106.928382, 10.851571], [106.928730, 10.850100],
    [106.928905, 10.848288], [106.928811, 10.845183],
    [106.928639, 10.843191], [106.928894, 10.842335],
    [106.929335, 10.841548], [106.930910, 10.839733],
    [106.932564, 10.837574], [106.934659, 10.834226],
    [106.933466, 10.833014], [106.931379, 10.830346],
    [106.928238, 10.827200], [106.927417, 10.826207],
    [106.921013, 10.824275], [106.920550, 10.827666],
    [106.919382, 10.827666], [106.918362, 10.827434],
    [106.917275, 10.828433], [106.913057, 10.825195],
    [106.912357, 10.826120], [106.910331, 10.825503],
    [106.907597, 10.825655], [106.905880, 10.826729],
    [106.904407, 10.826422], [106.904555, 10.824885],
    [106.903854, 10.824340], [106.902603, 10.824109],
    [106.902142, 10.823496], [106.902057, 10.822647],
    [106.901511, 10.822031], [106.893008, 10.826423],
    [106.888177, 10.828575], [106.885995, 10.829730],
    [106.886145, 10.827888], [106.886144, 10.826574],
    [106.885832, 10.825955], [106.885524, 10.824869],
    [106.884896, 10.824105], [106.884580, 10.823871],
    [106.883878, 10.823715], [106.883023, 10.823099],
    [106.882238, 10.823251], [106.881924, 10.824020],
    [106.881928, 10.824717], [106.882001, 10.825408],
    [106.882242, 10.826566], [106.881851, 10.827646],
    [106.881461, 10.828187], [106.880918, 10.828422],
    [106.880605, 10.828342], [106.879513, 10.827573],
    [106.878426, 10.826492], [106.876857, 10.825559],
    [106.874135, 10.825328]
]

const TBrings = [
    [107.117293, 11.078439], [107.117272, 11.080015],
    [107.117583, 11.081127], [107.117058, 11.082842],
    [107.116299, 11.083800], [107.115297, 11.082723],
    [107.114096, 11.081987], [107.113072, 11.081710],
    [107.111228, 11.082168], [107.109480, 11.083254],
    [107.108374, 11.084799], [107.107572, 11.084105],
    [107.106479, 11.083854], [107.105555, 11.084097],
    [107.101269, 11.086427], [107.086483, 11.093298],
    [107.081410, 11.096124], [107.062973, 11.103422],
    [107.061128, 11.103589], [107.058773, 11.103172],
    [107.057680, 11.102172], [107.057337, 11.100852],
    [107.058175, 11.096200], [107.059355, 11.092622],
    [107.060198, 11.088612], [107.060858, 11.084424],
    [107.061790, 11.083084], [107.062550, 11.080594],
    [107.062875, 11.079117], [107.062372, 11.078112],
    [107.060598, 11.076200], [107.059675, 11.074379],
    [107.059765, 11.072538], [107.060264, 11.069646],
    [107.058412, 11.069811], [107.055467, 11.069809],
    [107.055295, 11.069479], [107.055551, 11.068736],
    [107.055551, 11.067902], [107.055297, 11.067483],
    [107.053443, 11.066493], [107.051172, 11.065159],
    [107.050753, 11.064583], [107.050498, 11.062676],
    [107.050161, 11.061841], [107.049657, 11.061017],
    [107.049398, 11.059604], [107.049312, 11.058108],
    [107.049563, 11.057530], [107.049987, 11.056782],
    [107.050746, 11.056031], [107.051173, 11.055702],
    [107.051921, 11.054710], [107.051588, 11.054046],
    [107.050913, 11.053294], [107.050242, 11.053044],
    [107.047635, 11.053297], [107.044499, 11.052043],
    [107.043085, 11.051300], [107.041655, 11.050141],
    [107.041239, 11.049040], [107.041064, 11.048568],
    [107.040473, 11.048149], [107.039378, 11.047235],
    [107.039378, 11.046903], [107.041145, 11.046241],
    [107.042408, 11.044662], [107.043757, 11.042754],
    [107.044258, 11.041595], [107.044258, 11.041017],
    [107.044002, 11.039935], [107.043501, 11.039274],
    [107.042993, 11.038940], [107.042238, 11.039603],
    [107.040389, 11.040597], [107.039548, 11.040595],
    [107.038537, 11.040265], [107.036756, 11.038596],
    [107.035676, 11.037086], [107.033652, 11.034205],
    [107.032305, 11.032376], [107.030705, 11.030805],
    [107.029357, 11.030466], [107.026743, 11.030218],
    [107.023904, 11.030301], [107.021372, 11.030296],
    [107.020859, 11.030212], [107.020689, 11.029633],
    [107.020854, 11.029302], [107.021535, 11.029217],
    [107.022791, 11.028890], [107.023129, 11.028641],
    [107.022873, 11.028060], [107.021276, 11.025980],
    [107.020015, 11.024903], [107.019088, 11.024487],
    [107.018504, 11.023741], [107.017828, 11.023410],
    [107.017823, 11.021835], [107.018582, 11.020421],
    [107.018918, 11.018679], [107.018748, 11.017771],
    [107.017739, 11.016608], [107.012175, 11.010703],
    [107.010075, 11.007888], [107.008895, 11.005479],
    [107.007549, 11.003327], [107.006959, 11.002903],
    [107.006117, 11.003574], [107.005195, 11.005645],
    [107.004863, 11.006391], [107.004439, 11.006388],
    [107.003935, 11.006638], [107.003095, 11.006967],
    [107.002674, 11.007296], [107.001832, 11.008047],
    [107.001322, 11.008128], [107.000483, 11.007546],
    [106.999820, 11.007383], [106.998295, 11.006800],
    [106.997796, 11.006216], [106.996283, 11.004890],
    [106.995261, 11.004393], [106.994390, 11.004274],
    [106.993934, 11.004543], [106.993341, 11.005625],
    [106.991731, 11.006152], [106.990734, 11.006547],
    [106.990613, 11.006752], [106.990541, 11.007028],
    [106.990589, 11.007289], [106.990597, 11.007468],
    [106.990589, 11.007747], [106.990541, 11.007921],
    [106.990449, 11.008010], [106.989581, 11.008227],
    [106.989431, 11.008319], [106.989311, 11.008472],
    [106.989284, 11.008524], [106.989282, 11.008840],
    [106.989317, 11.009177], [106.989372, 11.009549],
    [106.989464, 11.010418], [106.989440, 11.010709],
    [106.989342, 11.010862], [106.989161, 11.010965],
    [106.989047, 11.010999], [106.988835, 11.011138],
    [106.988743, 11.011295], [106.988760, 11.011396],
    [106.988810, 11.011482], [106.988867, 11.011729],
    [106.988854, 11.011901], [106.988699, 11.012052],
    [106.988501, 11.012137], [106.988119, 11.012166],
    [106.987891, 11.012126], [106.987786, 11.012004],
    [106.987746, 11.011827], [106.987742, 11.011526],
    [106.987650, 11.011288], [106.987455, 11.011262],
    [106.987329, 11.011334], [106.987180, 11.011508],
    [106.987119, 11.011711], [106.987169, 11.012108],
    [106.987147, 11.012218], [106.987077, 11.012343],
    [106.986790, 11.012570], [106.986024, 11.012482],
    [106.985506, 11.012597], [106.985252, 11.012846],
    [106.984666, 11.012763], [106.983905, 11.012765],
    [106.982286, 11.012846], [106.980372, 11.013009],
    [106.979363, 11.012924], [106.978858, 11.012593],
    [106.978856, 11.011931], [106.979110, 11.011431],
    [106.979112, 11.011018], [106.978939, 11.010686],
    [106.978432, 11.010520], [106.978101, 11.010268],
    [106.977680, 11.009855], [106.977340, 11.009772],
    [106.975586, 11.011007], [106.974987, 11.011344],
    [106.974566, 11.011429], [106.974145, 11.011263],
    [106.973724, 11.010765], [106.971064, 11.009791],
    [106.971993, 11.008279], [106.971524, 11.007678],
    [106.971951, 11.006384], [106.971584, 11.005744],
    [106.970860, 11.006034], [106.970209, 11.006108],
    [106.969277, 11.006547], [106.968263, 11.006767],
    [106.967752, 11.006485], [106.967670, 11.005483],
    [106.968018, 11.003403], [106.968592, 11.002540],
    [106.968660, 11.002043], [106.968528, 11.001187],
    [106.968385, 11.000878], [106.967166, 10.999936],
    [106.966907, 10.999876], [106.965677, 10.999777],
    [106.964493, 11.000949], [106.963085, 11.002197],
    [106.961160, 11.003228], [106.959230, 11.003595],
    [106.957152, 11.003374], [106.956263, 11.002570],
    [106.954850, 11.001984], [106.952851, 11.001547],
    [106.952700, 11.000519], [106.953220, 10.999783],
    [106.953738, 10.998385], [106.954181, 10.997512],
    [106.954176, 10.996046], [106.954918, 10.995018],
    [106.956623, 10.993401], [106.956624, 10.992891],
    [106.956178, 10.992375], [106.955337, 10.991773],
    [106.953209, 10.989961], [106.952245, 10.989811],
    [106.949651, 10.989668], [106.948684, 10.989668],
    [106.948460, 10.990183], [106.948460, 10.990401],
    [106.948462, 10.991057], [106.948317, 10.992309],
    [106.947646, 10.993043], [106.946836, 10.993260],
    [106.945204, 10.993413], [106.943864, 10.993777],
    [106.943203, 10.994216], [106.941273, 10.995760],
    [106.939937, 10.996201], [106.939492, 10.995833],
    [106.939051, 10.995249], [106.935858, 10.993635],
    [106.934668, 10.993267], [106.933411, 10.993196],
    [106.932965, 10.993490], [106.933112, 10.994004],
    [106.933113, 10.994882], [106.932748, 10.995986],
    [106.932451, 10.996718], [106.931780, 10.997306],
    [106.930598, 10.998109], [106.930296, 10.998039],
    [106.929710, 10.997817], [106.927558, 10.998476],
    [106.926816, 10.998041], [106.923778, 10.998116],
    [106.922067, 10.997972], [106.921473, 10.997822],
    [106.920285, 10.997823], [106.919321, 10.998924],
    [106.917394, 10.999439], [106.915834, 10.999072],
    [106.914654, 10.998635], [106.911088, 10.995918],
    [106.908757, 10.995031], [106.906931, 10.994454],
    [106.906568, 10.994413], [106.905145, 10.994243],
    [106.903093, 10.994096], [106.903613, 10.993281],
    [106.904139, 10.992021], [106.904143, 10.989865],
    [106.903838, 10.988989], [106.903317, 10.988243],
    [106.903167, 10.987408], [106.903676, 10.985723],
    [106.904131, 10.984759], [106.905328, 10.984683],
    [106.906006, 10.983267], [106.906904, 10.982378],
    [106.908330, 10.982970], [106.908855, 10.983713],
    [106.911178, 10.984450], [106.911782, 10.984753],
    [106.912082, 10.984751], [106.912532, 10.984082],
    [106.912456, 10.983266], [106.911780, 10.981779],
    [106.911704, 10.980521], [106.912301, 10.978818],
    [106.912304, 10.978076], [106.912522, 10.977780],
    [106.913125, 10.977629], [106.913451, 10.977631],
    [106.914552, 10.977628], [106.915974, 10.976741],
    [106.916798, 10.975923], [106.916794, 10.975109],
    [106.916199, 10.974369], [106.916872, 10.973252],
    [106.9169681, 10.9719801], [106.916644, 10.971477],
    [106.916643, 10.968804], [106.916268, 10.967617],
    [106.915816, 10.967171], [106.914842, 10.966804],
    [106.914242, 10.966506], [106.914089, 10.965986],
    [106.914240, 10.964718], [106.914310, 10.963097],
    [106.920914, 10.963468], [106.926155, 10.963152],
    [106.9264954, 10.9631], [106.929004, 10.962199],
    [106.9341933, 10.9596662], [106.934405, 10.958935],
    [106.934254, 10.957819], [106.934253, 10.956636],
    [106.934101, 10.955590], [106.933951, 10.953821],
    [106.933123, 10.952558], [106.932222, 10.949964],
    [106.931472, 10.949146], [106.931396, 10.948334],
    [106.931095, 10.947224], [106.931095, 10.946858],
    [106.931167, 10.945738], [106.930468, 10.944564],
    [106.929891, 10.943515], [106.929666, 10.942181],
    [106.929664, 10.941443], [106.930340, 10.941737],
    [106.936435, 10.943116], [106.937615, 10.943297],
    [106.938338, 10.941592], [106.938787, 10.938544],
    [106.939781, 10.936570], [106.938512, 10.935225],
    [106.937968, 10.933882], [106.937966, 10.933253],
    [106.938510, 10.931457], [106.938599, 10.930745],
    [106.940772, 10.927607], [106.941406, 10.927425],
    [106.942133, 10.928680], [106.942677, 10.929487],
    [106.942678, 10.929755], [106.942316, 10.931011],
    [106.942288, 10.931417], [106.942226, 10.932267],
    [106.942455, 10.932719], [106.942681, 10.933162],
    [106.942958, 10.933867], [106.943679, 10.934507],
    [106.947304, 10.934326], [106.947849, 10.933338],
    [106.947765, 10.932766], [106.947756, 10.932713],
    [106.950749, 10.932709], [106.954285, 10.931990],
    [106.954651, 10.931989], [106.955337, 10.931991],
    [106.957909, 10.931989], [106.959457, 10.931763],
    [106.959800, 10.931712], [106.960144, 10.931663],
    [106.960985, 10.931538], [106.963921, 10.930745],
    [106.965515, 10.930282], [106.965877, 10.930192],
    [106.966668, 10.929931], [106.966971, 10.929831],
    [106.966790, 10.929114], [106.966880, 10.928307],
    [106.968512, 10.927680], [106.968509, 10.927231],
    [106.968429, 10.927033], [106.967883, 10.925684],
    [106.967609, 10.925010], [106.966782, 10.922565],
    [106.966418, 10.921227], [106.966600, 10.920330],
    [106.967051, 10.919700], [106.967778, 10.919521],
    [106.970133, 10.919699], [106.970406, 10.918981],
    [106.970671, 10.914052], [106.970573, 10.913887],
    [106.969764, 10.912528], [106.969220, 10.911542],
    [106.969219, 10.910379], [106.969308, 10.909390],
    [106.969488, 10.908498], [106.969759, 10.907508],
    [106.969848, 10.906792], [106.969757, 10.905805],
    [106.969545, 10.905122], [106.968666, 10.902400],
    [106.968392, 10.900877], [106.968408, 10.900740],
    [106.968558, 10.899391], [106.968574, 10.899262],
    [106.968572, 10.898725], [106.970788, 10.898504],
    [106.971129, 10.898468], [106.971214, 10.898460],
    [106.979370, 10.898002], [106.981085, 10.897949],
    [106.981432, 10.897939], [106.981774, 10.897929],
    [106.983979, 10.897907], [106.983979, 10.896921],
    [106.984159, 10.895846], [106.984702, 10.894587],
    [106.984883, 10.893692], [106.984882, 10.892797],
    [106.985242, 10.892080], [106.985603, 10.891720],
    [106.985592, 10.891637], [106.985513, 10.891092],
    [106.984423, 10.890376], [106.977986, 10.884913],
    [106.978890, 10.884014], [106.979615, 10.883028],
    [106.977801, 10.881777], [106.976257, 10.879894],
    [106.975531, 10.879805], [106.974716, 10.879625],
    [106.972632, 10.878460], [106.971545, 10.877295],
    [106.973641, 10.875124], [106.976883, 10.871288],
    [106.986294, 10.858552], [106.987111, 10.859358],
    [106.994913, 10.865091], [106.997360, 10.867150],
    [106.997816, 10.867240], [106.998992, 10.867240],
    [106.999899, 10.867685], [107.000446, 10.867687],
    [107.003252, 10.867504], [107.018567, 10.867584],
    [107.021830, 10.867402], [107.024004, 10.867041],
    [107.025275, 10.867041], [107.026001, 10.866680],
    [107.026062, 10.866675], [107.027093, 10.866561],
    [107.028121, 10.866447], [107.029259, 10.866322],
    [107.033520, 10.866137], [107.038233, 10.866223],
    [107.042764, 10.865950], [107.043942, 10.866039],
    [107.044118, 10.865582], [107.046354, 10.863880],
    [107.046558, 10.863662], [107.046574, 10.863369],
    [107.046619, 10.863006], [107.046590, 10.862471],
    [107.046661, 10.862339], [107.047131, 10.861917],
    [107.047370, 10.861816], [107.047604, 10.861815],
    [107.047854, 10.861930], [107.048033, 10.861990],
    [107.048266, 10.861946], [107.048427, 10.861843],
    [107.048561, 10.861638], [107.048607, 10.861462],
    [107.048647, 10.861158], [107.048767, 10.860636],
    [107.048869, 10.860578], [107.049883, 10.860505],
    [107.049974, 10.860460], [107.049988, 10.860359],
    [107.049930, 10.860229], [107.049649, 10.859922],
    [107.049208, 10.859573], [107.049046, 10.859271],
    [107.049063, 10.859196], [107.049209, 10.858889],
    [107.049325, 10.858804], [107.050107, 10.858512],
    [107.050473, 10.858104], [107.050561, 10.857771],
    [107.050781, 10.857437], [107.050913, 10.857422],
    [107.051061, 10.857451], [107.051121, 10.857540],
    [107.051151, 10.857683], [107.051149, 10.858235],
    [107.051181, 10.858366], [107.051414, 10.858470],
    [107.051604, 10.858413], [107.051928, 10.858236],
    [107.052005, 10.858134], [107.052063, 10.858018],
    [107.052019, 10.857830], [107.051729, 10.857189],
    [107.051216, 10.856294], [107.051128, 10.855726],
    [107.051186, 10.855364], [107.051335, 10.855276],
    [107.051496, 10.855233], [107.051614, 10.855248],
    [107.051938, 10.855610], [107.052102, 10.855654],
    [107.052204, 10.855581], [107.052345, 10.855398],
    [107.052585, 10.855013], [107.052644, 10.854693],
    [107.052615, 10.854504], [107.052321, 10.853983],
    [107.051820, 10.853602], [107.051732, 10.853487],
    [107.051708, 10.853300], [107.051651, 10.852970],
    [107.051709, 10.852666], [107.051857, 10.852214],
    [107.052079, 10.851922], [107.052388, 10.851675],
    [107.052770, 10.851296], [107.052916, 10.850877],
    [107.052886, 10.849768], [107.052916, 10.849116],
    [107.053077, 10.848867], [107.053359, 10.848723],
    [107.053653, 10.848694], [107.053858, 10.848768],
    [107.054133, 10.849255], [107.054229, 10.849323],
    [107.054325, 10.849379], [107.054431, 10.849378],
    [107.054615, 10.849406], [107.054854, 10.849370],
    [107.054903, 10.849356], [107.055364, 10.849227],
    [107.055990, 10.849189], [107.056463, 10.849132],
    [107.056722, 10.849017], [107.056827, 10.848960],
    [107.057019, 10.848872], [107.057191, 10.848854],
    [107.057439, 10.848891], [107.057734, 10.849006],
    [107.058047, 10.849177], [107.058385, 10.849233],
    [107.058964, 10.849216], [107.059415, 10.849186],
    [107.059788, 10.849189], [107.060014, 10.849254],
    [107.060111, 10.849495], [107.060097, 10.849635],
    [107.059984, 10.849790], [107.059694, 10.850020],
    [107.059205, 10.850272], [107.059021, 10.850404],
    [107.058875, 10.850689], [107.058869, 10.851013],
    [107.058944, 10.851141], [107.059014, 10.851192],
    [107.059043, 10.851220], [107.059155, 10.851254],
    [107.059312, 10.851214], [107.059436, 10.851136],
    [107.059580, 10.851114], [107.059764, 10.851150],
    [107.059869, 10.851218], [107.060001, 10.851351],
    [107.060056, 10.851521], [107.060056, 10.851525],
    [107.060067, 10.851750], [107.060035, 10.852063],
    [107.059923, 10.852352], [107.059927, 10.852528],
    [107.059961, 10.852684], [107.060024, 10.852779],
    [107.060150, 10.852861], [107.060344, 10.852910],
    [107.060602, 10.852910], [107.060810, 10.852939],
    [107.061124, 10.853015], [107.061370, 10.853136],
    [107.061503, 10.853329], [107.061547, 10.853538],
    [107.061513, 10.853775], [107.061435, 10.854144],
    [107.061425, 10.854397], [107.061424, 10.854778],
    [107.061457, 10.855004], [107.061577, 10.855255],
    [107.061732, 10.855406], [107.061849, 10.855470],
    [107.061940, 10.855476], [107.062090, 10.855457],
    [107.062221, 10.855406], [107.062434, 10.855346],
    [107.063056, 10.855431], [107.063331, 10.855505],
    [107.063760, 10.855777], [107.063928, 10.856088],
    [107.063948, 10.856240], [107.063895, 10.856436],
    [107.063596, 10.857058], [107.063869, 10.858313],
    [107.064960, 10.859745], [107.065143, 10.860105],
    [107.065779, 10.861186], [107.066412, 10.862166],
    [107.067047, 10.862437], [107.067501, 10.863064],
    [107.067593, 10.865032], [107.067439, 10.877141],
    [107.067429, 10.878032], [107.068634, 10.878067],
    [107.070690, 10.878127], [107.072070, 10.878164],
    [107.076594, 10.878296], [107.077406, 10.878206],
    [107.077116, 10.879136], [107.077044, 10.880285],
    [107.077027, 10.880510], [107.076974, 10.881217],
    [107.076755, 10.882004], [107.076899, 10.882935],
    [107.077262, 10.883939], [107.077624, 10.885377],
    [107.077845, 10.886523], [107.077990, 10.887667],
    [107.078135, 10.887959], [107.078711, 10.887243],
    [107.079954, 10.886375], [107.080093, 10.886240],
    [107.081255, 10.887095], [107.082564, 10.885152],
    [107.083648, 10.883866], [107.083942, 10.883219],
    [107.083938, 10.881786], [107.084084, 10.881066],
    [107.084517, 10.880140], [107.085024, 10.879709],
    [107.085679, 10.879563], [107.086115, 10.880136],
    [107.086404, 10.880996], [107.087131, 10.881714],
    [107.087561, 10.882216], [107.088004, 10.882505],
    [107.088508, 10.882433], [107.088656, 10.882861],
    [107.088654, 10.883721], [107.088937, 10.883863],
    [107.089304, 10.884081], [107.089524, 10.884585],
    [107.089888, 10.885228], [107.089815, 10.885872],
    [107.089379, 10.886734], [107.089378, 10.887377],
    [107.089599, 10.887882], [107.090034, 10.888169],
    [107.090905, 10.887880], [107.091292, 10.887923],
    [107.092225, 10.888020], [107.092154, 10.889448],
    [107.092225, 10.889854], [107.093601, 10.889859],
    [107.094566, 10.890058], [107.095393, 10.890809],
    [107.096080, 10.892030], [107.096908, 10.892780],
    [107.098149, 10.892373], [107.099182, 10.896661],
    [107.099180, 10.897370], [107.099180, 10.898089],
    [107.098563, 10.900882], [107.097391, 10.903739],
    [107.097395, 10.905510], [107.097463, 10.906803],
    [107.097190, 10.908436], [107.096155, 10.911367],
    [107.095468, 10.913745], [107.095467, 10.914834],
    [107.096296, 10.916468], [107.097122, 10.918170],
    [107.098224, 10.919395], [107.098087, 10.920755],
    [107.097265, 10.921368], [107.096709, 10.921913],
    [107.096435, 10.922730], [107.096227, 10.924092],
    [107.096161, 10.925246], [107.096711, 10.927018],
    [107.096714, 10.928037], [107.094042, 10.928173],
    [107.093355, 10.928210], [107.091204, 10.928314],
    [107.091546, 10.929265], [107.094094, 10.932326],
    [107.095058, 10.933076], [107.093065, 10.934510],
    [107.093342, 10.940157], [107.094377, 10.940226],
    [107.094649, 10.941195], [107.095133, 10.942878],
    [107.095173, 10.943213], [107.095253, 10.943890],
    [107.095333, 10.944562], [107.095407, 10.945192],
    [107.094581, 10.945872], [107.094514, 10.946826],
    [107.094585, 10.947980], [107.094510, 10.948458],
    [107.093276, 10.949006], [107.093275, 10.950639],
    [107.109120, 10.953014], [107.111459, 10.952942],
    [107.113384, 10.952538], [107.113179, 10.954168],
    [107.113113, 10.956141], [107.112492, 10.958254],
    [107.112560, 10.958865], [107.113044, 10.959208],
    [107.1132784, 10.9608707], [107.112838, 10.961316],
    [107.111943, 10.961725], [107.111463, 10.962198],
    [107.111324, 10.962877], [107.111049, 10.963495],
    [107.111049, 10.964038], [107.110567, 10.964650],
    [107.109951, 10.966013], [107.109877, 10.966763],
    [107.109260, 10.967853], [107.108228, 10.968397],
    [107.106783, 10.968599], [107.106230, 10.969415],
    [107.106230, 10.970097], [107.106987, 10.972618],
    [107.107608, 10.974046], [107.108461, 10.973947],
    [107.111535, 10.973568], [107.111877, 10.973430],
    [107.112835, 10.973498], [107.113946, 10.973635],
    [107.115324, 10.973293], [107.116084, 10.972951],
    [107.117360, 10.972595], [107.118264, 10.972298],
    [107.119466, 10.972368], [107.120819, 10.972666],
    [107.121572, 10.973408], [107.121943, 10.973629],
    [107.122771, 10.973482], [107.123373, 10.973853],
    [107.123823, 10.974446], [107.124426, 10.975035],
    [107.124949, 10.975849], [107.125700, 10.977776],
    [107.126380, 10.978516], [107.127282, 10.978960],
    [107.129606, 10.978447], [107.129981, 10.978890],
    [107.129981, 10.979555], [107.128558, 10.981256],
    [107.126982, 10.983179], [107.126158, 10.983922],
    [107.125556, 10.986140], [107.124880, 10.987915],
    [107.123456, 10.988731], [107.121740, 10.989541],
    [107.120004, 10.990581], [107.119556, 10.991468],
    [107.119403, 10.993541], [107.120383, 10.995615],
    [107.121287, 10.998135], [107.121587, 10.999169],
    [107.121589, 11.003831], [107.122041, 11.005538],
    [107.123021, 11.007685], [107.123471, 11.008942],
    [107.122736, 11.010830], [107.121504, 11.010741],
    [107.120529, 11.010829], [107.120353, 11.011176],
    [107.119383, 11.011784], [107.118851, 11.011263],
    [107.118411, 11.010656], [107.117792, 11.010393],
    [107.117085, 11.010481], [107.116557, 11.010828],
    [107.116557, 11.011437], [107.116910, 11.013090],
    [107.117265, 11.014135], [107.117265, 11.014570],
    [107.116205, 11.015441], [107.114969, 11.015789],
    [107.114088, 11.016487], [107.113913, 11.017440],
    [107.113646, 11.018137], [107.112501, 11.019008],
    [107.111797, 11.020836], [107.111265, 11.021447],
    [107.111088, 11.022055], [107.111178, 11.022488],
    [107.111179, 11.022751], [107.109856, 11.023359],
    [107.107206, 11.024230], [107.107030, 11.025449],
    [107.107031, 11.026755], [107.107032, 11.027797],
    [107.106680, 11.028321], [107.105799, 11.029104],
    [107.105091, 11.029626], [107.105002, 11.031019],
    [107.105003, 11.032191], [107.105007, 11.035372],
    [107.104745, 11.038505], [107.103909, 11.041515],
    [107.103834, 11.042785], [107.103380, 11.043234],
    [107.102850, 11.044132], [107.102872, 11.044320],
    [107.102926, 11.044803], [107.103046, 11.045333],
    [107.103382, 11.046821], [107.103915, 11.047642],
    [107.103993, 11.049438], [107.104220, 11.050855],
    [107.105129, 11.052202], [107.105434, 11.053397],
    [107.105433, 11.055487], [107.105284, 11.056760],
    [107.105134, 11.058406], [107.105438, 11.059600],
    [107.107087, 11.061077], [107.108397, 11.062441],
    [107.108625, 11.064760], [107.107567, 11.068493],
    [107.107114, 11.070511], [107.107494, 11.071408],
    [107.108480, 11.072007], [107.109994, 11.072381],
    [107.110602, 11.072306], [107.111057, 11.071934],
    [107.111133, 11.071112], [107.111587, 11.070588],
    [107.112116, 11.070365], [107.112725, 11.070663],
    [107.114090, 11.072306], [107.115681, 11.074176],
    [107.116519, 11.076267],
]