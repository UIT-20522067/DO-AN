// points for schools, towns, cities
const img = 'data:image/png;base64,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'
const pointListCM = [
    {
        point: {
            type: "point",
            longitude: 107.3289586, latitude: 10.6840052,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Ngô Mây - phân hiệu III",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.18283, latitude: 10.8115555,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Xuân Đường",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1851565, latitude: 10.8114818,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Xuân Đường",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1851565, latitude: 10.8114818,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Xuân Đường",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2373043, latitude: 10.8399411
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Thanh Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2350526, latitude: 10.8520035,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Chu Văn An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2374139, latitude: 10.8382249,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nhân Nghĩa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1819478, latitude: 10.8137725,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Cẩm Mỹ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.235865, latitude: 10.8403456,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Thanh Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1663648, latitude: 10.8400497,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Xuân Quế",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3310521, latitude: 10.7136155,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Lâm San (Cơ sở 1)",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3341651, latitude: 10.7140011,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Lâm San",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3311541, latitude: 10.715297,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Hữu Cảnh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1451182, latitude: 10.7647747,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Thừa Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1219171, latitude: 10.7516353,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Thừa Đức 1",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1474766, latitude: 10.7876176,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Thừa Đức 2",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1499716, latitude: 10.7877725,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Thừa Đức",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.095053, latitude: 10.7622278,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Đồi 20",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1226467, latitude: 10.8306847,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Sông Nhạn",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.0970027, latitude: 10.8274487,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Quang Trung",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2797873, latitude: 10.8767139,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nam Hà",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.316215, latitude: 10.8519671,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Mỹ Hạnh (Đóng cửa tạm thời)",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2824242, latitude: 10.8533097,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Mỹ Hạnh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2816303, latitude: 10.8464395,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Xuân Bảo",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2354888, latitude: 10.7696155,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Xuân Mỹ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2422539, latitude: 10.7760472,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Xuân Mỹ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.296173, latitude: 10.8124015,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Bảo Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2733219, latitude: 10.8346969,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Bảo Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.295473, latitude: 10.8341108,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nguyễn Du",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.2914588, latitude: 10.8332766,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Dân lập Việt Hoa Bảo Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3015466, latitude: 10.7479101,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trương Định",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3218029, latitude: 10.7540301,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Sông Ray",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3359017, latitude: 10.7554913,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Ngô Quyền",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3547977, latitude: 10.7533715,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Hòa Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3508593, latitude: 10.7464767,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Hồng Bàng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3202692, latitude: 10.7662976,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trung Dũng",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.321958, latitude: 10.7721302,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Sông Ray",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3074517, latitude: 10.7853875,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trung Dũng (PH 3)",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3514965, latitude: 10.8241385,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Lê Quý Đôn",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3364496, latitude: 10.826663,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THPT Võ Trường Toản",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3394071, latitude: 10.8314603,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Xuân Tây Ấp 3",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3773981, latitude: 10.7675138,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nguyễn Tri Phương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3738652, latitude: 10.7764425,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nguyễn Thượng Hiền",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3589635, latitude: 10.7775291,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Trãi - Xuân Đông",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3600894, latitude: 10.8179524,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Nguyễn Bá Ngọc",
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.3588106, latitude: 10.8179496,
        },
        markerSymbol: {
            type: "picture-marker", url: img,
            width: "48px", height: "48px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Xuân Đông",
        }
    },
];

// paths in polyline
const paths56 = [
    [10.898020, 107.227880], [10.897498, 107.227587], [10.891889, 107.224405],
    [10.890330, 107.223476], [10.888292, 107.222356], [10.887857, 107.222172],
    [10.884236, 107.221148], [10.883695, 107.221129], [10.883022, 107.221240],
    [10.872768, 107.226253], [10.870606, 107.228304], [10.869928, 107.228814],
    [10.869366, 107.229151], [10.858828, 107.234308], [10.857968, 107.234487],
    [10.853621, 107.235030], [10.838477, 107.236789], [10.836794, 107.236575],
    [10.834322, 107.236040], [10.811492, 107.227522], [10.811360, 107.227230],
    [10.810986, 107.227208], [10.810942, 107.227522], [10.811118, 107.227656],
    [10.811272, 107.227611], [10.811338, 107.227186], [10.811030, 107.227208],
    [10.810854, 107.227298], [10.809093, 107.226648], [10.806979, 107.226670],
    [10.806033, 107.226536], [10.802995, 107.225393], [10.802048, 107.224675],
    [10.800991, 107.223151], [10.799318, 107.221717], [10.797469, 107.220933],
    [10.797007, 107.220552], [10.795267, 107.218624], [10.794629, 107.218400],
    [10.793792, 107.218310], [10.793220, 107.218445], [10.791305, 107.220067],
    [10.788004, 107.221363], [10.778388, 107.222522], [10.777620, 107.222576],
    [10.777063, 107.222765], [10.773487, 107.226271], [10.772162, 107.232150],
    [10.766864, 107.240861], [10.766413, 107.241373], [10.759233, 107.244286],
    [10.757140, 107.244178], [10.756769, 107.244205],
]

// function swap longitude and latitude
let x = 0, y = 1;
paths56.map((coordi) => (
    [coordi[x], coordi[y]] = [coordi[y], coordi[x]]
))

// create an object for storing attributes related to the line 
const lineAttQL56 = {
    "Đường": "Quốc lộ 56",
    "Chiều dài": '50km'
};

// attributes for polygon
const graphicAttCM = {
    'Huyện': 'Cẩm Mỹ',
    'Diện tích': '467,95 km²',
    'Dân số': '158.010 người',
}


// rings in polygon
const ringsCM = [
    [107.244047, 10.759260], [107.244402, 10.759046], [107.244324, 10.758167],
    [107.244188, 10.757145], [107.244330, 10.756430], [107.247162, 10.756146],
    [107.252327, 10.755716], [107.255037, 10.755655], [107.255531, 10.755643],
    [107.258437, 10.755716], [107.260890, 10.755638], [107.262026, 10.755603],
    [107.265579, 10.755501], [107.270498, 10.755400], [107.272770, 10.755357],
    [107.279934, 10.755144], [107.285913, 10.755031], [107.288760, 10.755001],
    [107.295966, 10.754779], [107.296109, 10.754443], [107.300326, 10.754217],
    [107.299472, 10.750248], [107.303130, 10.749111], [107.303270, 10.748971],
    [107.302187, 10.746555], [107.302187, 10.746148], [107.301758, 10.745644],
    [107.301758, 10.742877], [107.302470, 10.738694], [107.302605, 10.733948],
    [107.303246, 10.732111], [107.303966, 10.731673], [107.303469, 10.730829],
    [107.303536, 10.730336], [107.304034, 10.729699], [107.304610, 10.729269],
    [107.304754, 10.728984], [107.304467, 10.728491], [107.303970, 10.728421],
    [107.303174, 10.728636], [107.302530, 10.729410], [107.301813, 10.729981],
    [107.301320, 10.730118], [107.301455, 10.729559], [107.302034, 10.728701],
    [107.302109, 10.728204], [107.303107, 10.726992], [107.302893, 10.725580],
    [107.302390, 10.723453], [107.301674, 10.721824], [107.301100, 10.719905],
    [107.301097, 10.717431], [107.301878, 10.716440], [107.303950, 10.715094],
    [107.305321, 10.714732], [107.305675, 10.714309], [107.305673, 10.713243],
    [107.304517, 10.711956], [107.300874, 10.707368], [107.300724, 10.706517],
    [107.300728, 10.704609], [107.300218, 10.704098], [107.300151, 10.703961],
    [107.300286, 10.703114], [107.300728, 10.702547], [107.301369, 10.701339],
    [107.302150, 10.700565], [107.303222, 10.699791], [107.304234, 10.699357],
    [107.305446, 10.698580], [107.305741, 10.697645], [107.307160, 10.696377],
    [107.307163, 10.695957], [107.306661, 10.694746], [107.306661, 10.693832],
    [107.306946, 10.693604], [107.306949, 10.693331], [107.305440, 10.692976],
    [107.304724, 10.692052], [107.304649, 10.691635], [107.304090, 10.691071],
    [107.303794, 10.690921], [107.303652, 10.690364], [107.304147, 10.688876],
    [107.304076, 10.688368], [107.302140, 10.687319], [107.299564, 10.686461],
    [107.299633, 10.685820], [107.299914, 10.684987], [107.299992, 10.683985],
    [107.301137, 10.683488], [107.303221, 10.681054], [107.306295, 10.678287],
    [107.307583, 10.677242], [107.308867, 10.675968], [107.310155, 10.674286],
    [107.310153, 10.674267], [107.310369, 10.673851], [107.310793, 10.673409],
    [107.311372, 10.673137], [107.312016, 10.672649], [107.313369, 10.670924],
    [107.314665, 10.669807], [107.316156, 10.669162], [107.317232, 10.669021],
    [107.320076, 10.669654], [107.322332, 10.670852], [107.322376, 10.672228],
    [107.323426, 10.673252], [107.324416, 10.673839], [107.339169, 10.678126],
    [107.34133, 10.676627], [107.341406, 10.675653], [107.342347, 10.676028],
    [107.343542, 10.675028], [107.347484, 10.676902], [107.349747, 10.676727],
    [107.350103, 10.677027], [107.35023, 10.677877], [107.351806, 10.678426],
    [107.350636, 10.680225], [107.350942, 10.682974], [107.350382, 10.684048],
    [107.350433, 10.684398], [107.351298, 10.684948], [107.351908, 10.684923],
    [107.353179, 10.684523], [107.353942, 10.685622], [107.353408, 10.686422],
    [107.352823, 10.686447], [107.351501, 10.687421], [107.34967, 10.687871],
    [107.348958, 10.688621], [107.349136, 10.689345], [107.350458, 10.69097],
    [107.350458, 10.691419], [107.349289, 10.692019], [107.34934, 10.692619],
    [107.350179, 10.692968], [107.351221, 10.694118], [107.352493, 10.694218],
    [107.353103, 10.695717], [107.353154, 10.696916], [107.352111, 10.697266],
    [107.352035, 10.69794], [107.352391, 10.69874], [107.352366, 10.699265],
    [107.352086, 10.700239], [107.352162, 10.701189], [107.35084, 10.702438],
    [107.350764, 10.702638], [107.35056, 10.703487], [107.349721, 10.703912],
    [107.349365, 10.704462], [107.347661, 10.705236], [107.347534, 10.705661],
    [107.347687, 10.70621], [107.348094, 10.70651], [107.349238, 10.706785],
    [107.349619, 10.70706], [107.349899, 10.708134], [107.350484, 10.708759],
    [107.350586, 10.710183], [107.350916, 10.710583], [107.353027, 10.711207],
    [107.3529, 10.712182], [107.353637, 10.713006], [107.354552, 10.712656],
    [107.355697, 10.712831], [107.357476, 10.71443], [107.358087, 10.715979],
    [107.358138, 10.717004], [107.3574, 10.717928], [107.357476, 10.718503],
    [107.359104, 10.719177], [107.359409, 10.719777], [107.358916, 10.721912],
    [107.360847, 10.72496], [107.360888, 10.726333], [107.360436, 10.727382],
    [107.360518, 10.728008], [107.363292, 10.729502], [107.363498, 10.730007],
    [107.363354, 10.730814], [107.36358, 10.731056], [107.364299, 10.731016],
    [107.364998, 10.73039], [107.365963, 10.730693], [107.367751, 10.732752],
    [107.368326, 10.732954], [107.368799, 10.732914], [107.369168, 10.732651],
    [107.370278, 10.731278], [107.371326, 10.731904], [107.371244, 10.73255],
    [107.370586, 10.733519], [107.370668, 10.734246], [107.372846, 10.73469],
    [107.374305, 10.736588], [107.375743, 10.737234], [107.376339, 10.73788],
    [107.377828, 10.740408], [107.377934, 10.741914], [107.378357, 10.742096],
    [107.379018, 10.741005], [107.379678, 10.741057], [107.379097, 10.744226],
    [107.380101, 10.746278], [107.380101, 10.747421], [107.380498, 10.747966],
    [107.381952, 10.747888], [107.38256, 10.747706], [107.382877, 10.74807],
    [107.382481, 10.748927], [107.382851, 10.751161], [107.385072, 10.752252],
    [107.387134, 10.754382], [107.388456, 10.755317], [107.388615, 10.756356],
    [107.389381, 10.756693], [107.39065, 10.755421], [107.39147, 10.755551],
    [107.392607, 10.756901], [107.392765, 10.758641], [107.392422, 10.759888],
    [107.39377, 10.761628], [107.393717, 10.762693], [107.394246, 10.763109],
    [107.396995, 10.763083],

    [107.39693331454191, 10.763559722133142], [107.39796328280362, 10.764683993025134], [107.39922213464752, 10.76603311461777],
    [107.39864992831143, 10.766707673148977], [107.3981921663858, 10.767494654477858], [107.39784884363189, 10.767494654477858],
    [107.3985354891397, 10.76828163889751], [107.39796328280362, 10.769405892171063], [107.39773439922146, 10.770192866451337],
    [107.39670443095974, 10.770642569528109], [107.3962466690341, 10.77142954057722], [107.39613222986236, 10.77255378210104],
    [107.39613222986236, 10.773902868447937], [107.39636110820584, 10.77435256598459], [107.39670443095974, 10.77570164427186],
    [107.39739107646756, 10.77660102300724], [107.39807772197537, 10.776825869844386], [107.3981921663858, 10.77738798362931],
    [107.39830660555752, 10.778399782709034], [107.39876436748318, 10.779523998203958], [107.39876436748318, 10.780423370663875],
    [107.3997943357449, 10.780985472583371], [107.4001376584988, 10.781884840675115], [107.40036654208096, 10.782784206078475],
    [107.40036654208096, 10.78323388519885], [107.40036654208096, 10.784020823328635], [107.40105318758877, 10.78458292367302],
    [107.40173983309658, 10.78492018234623], [107.40128207117094, 10.785369858273546], [107.40093874841703, 10.786044373477038],
    [107.40093874841703, 10.786718887167755], [107.40116762676053, 10.787505821325574], [107.40162539392485, 10.788067910010529],
    [107.40265536218656, 10.788067910010529], [107.40334200769438, 10.788067910010529], [107.40391420879176, 10.78818033173831],
    [107.40402865320219, 10.788967256925464], [107.40379976962002, 10.790091432926653], [107.40494417705347, 10.79099077378865],
    [107.40528749980737, 10.79132802527499], [107.40597414531518, 10.79200252711257], [107.40540194421781, 10.79233977746377],
    [107.40528749980737, 10.792677027436575], [107.40482973788174, 10.793014277030968], [107.40460085429956, 10.793688775084465],
    [107.40494417705347, 10.794475685851607], [107.40574526697172, 10.794588105182982], [107.40631746806909, 10.795150180625111],
    [107.40597414531518, 10.796274338647132], [107.40528749980737, 10.796274338647132], [107.4043719759561, 10.796274338647132],
    [107.4043719759561, 10.797061242643279], [107.40505862146391, 10.797623318604922], [107.40505862146391, 10.798410219067753],
    [107.40391420879176, 10.798522634354022], [107.40345644686612, 10.799197120042258], [107.40334200769438, 10.799871604215966],
    [107.4027698013583, 10.80043367234609], [107.40265536218656, 10.801557808023608], [107.40322756328395, 10.802569525763763],
    [107.40425753154567, 10.805155010310498], [107.40528749980737, 10.805829481101997], [107.40471529871, 10.806616362634383],
    [107.40517306063565, 10.807740475163326], [107.40574526697172, 10.80796529613475], [107.40551638338955, 10.809314223572333],
    [107.40563082256128, 10.810325915171394], [107.40654635165126, 10.811674831997374], [107.40746188074125, 10.813248559771488],
    [107.40826296542079, 10.814035421849043], [107.40917849451078, 10.815271913023784], [107.41032290194423, 10.815609137238802],
    [107.41112398662378, 10.816171178469766], [107.41158175378813, 10.817857290696834], [107.40677523523344, 10.812574105654491],
    [107.40757631991298, 10.81381060542589], [107.40826296542079, 10.814485056762763], [107.4089496109286, 10.81504709495458],
    [107.41009401836206, 10.815833954886724], [107.41089510828031, 10.815833954886724], [107.41135287020596, 10.81707043607362],
    [107.41146730937768, 10.817744880079607], [107.41169619295987, 10.818981358532357], [107.4124972776394, 10.819768202995162],
    [107.41295504480375, 10.820555050538347], [107.4134128067294, 10.82145429499366], [107.41455721416284, 10.82145429499366],
    [107.41512942049891, 10.82145429499366], [107.41547274325282, 10.821791512255286], [107.41512942049891, 10.822465945640358],
    [107.41501498132719, 10.823140377507796], [107.41547274325282, 10.823140377507796], [107.41615938876063, 10.823702404619794],
    [107.41627382793237, 10.824376833704665], [107.41627382793237, 10.82538847448592], [107.41661715068628, 10.82595049738148],
    [107.4167315950967, 10.826512514077367], [107.4167315950967, 10.827299343913092], [107.41661715068628, 10.827636554597103],
    [107.41650271151454, 10.8286481843716], [107.4167315950967, 10.829322602323208], [107.4167315950967, 10.830109419632345],
    [107.41650271151454, 10.83089623487444], [107.41741824060452, 10.83168305319469], [107.417647118948, 10.83213265905997],
    [107.41718935702235, 10.83269466930125], [107.41707491785061, 10.833031873910617], [107.41730379619409, 10.834043485460104],
    [107.41741824060452, 10.835055093591448], [107.4179904417019, 10.835055093591448], [107.41810488611232, 10.835617095774221],
    [107.41776156335843, 10.835954297091956], [107.41810488611232, 10.836628698587845], [107.41856265327667, 10.836628698587845],
    [107.41856265327667, 10.837190697816135], [107.41833376445581, 10.837415499270072], [107.417647118948, 10.838202295311298],
    [107.417647118948, 10.83887669174176], [107.417647118948, 10.83943868932124], [107.41833376445581, 10.8395510866524],
    [107.41913485437404, 10.84045027921733], [107.41856265327667, 10.841012271268713], [107.41913485437404, 10.841686661365978],
    [107.41879153162013, 10.842585844940043], [107.41902040996362, 10.843372629958102], [107.41867708720972, 10.8443842065522],
    [107.41947817712794, 10.84472139798996], [107.41902040996362, 10.845620572441279], [107.41867708720972, 10.846070159939401],
    [107.41913485437404, 10.846744538633004], [107.41867708720972, 10.847306518858371], [107.41787600776885, 10.84753131271082],
    [107.41741824060452, 10.84753131271082], [107.41684603426845, 10.847194124441325], [107.41593050517847, 10.846519746761633],
    [107.40196871667875, 10.847418915805727], [107.40105318758877, 10.847980894763632], [107.39956545740142, 10.847756103821734],
    [107.39109682772552, 10.847756103821734], [107.39018129863553, 10.847418915805727], [107.38194155254179, 10.84888006198626],
    [107.38022493877226, 10.848992455769563], [107.37942385409272, 10.849779223932071], [107.37702059481538, 10.848992455769563],
    [107.37507509746366, 10.849217248354433], [107.3739306900302, 10.849104852083125], [107.36368823354726, 10.850509796005907],
    [107.3527019054223, 10.853432045864981], [107.34675098467284, 10.854555985259248], [107.34560656152333, 10.855005561891236],
    [107.34514880483636, 10.852982477155626], [107.34217333398425, 10.852083317128049], [107.3391978840869, 10.852532897479987],
    [107.33690905874262, 10.852083317128049], [107.33507801104004, 10.853207261594843], [107.33599352441395, 10.854555985259248],
    [107.33553576772701, 10.855679920425947], [107.33256029687489, 10.85747820069543],

    [107.332224, 10.858572], [107.330172, 10.860706], [107.330775, 10.861891],
    [107.332103, 10.861417], [107.333431, 10.86284], [107.332345, 10.864262],
    [107.330534, 10.864499], [107.328241, 10.863551], [107.326309, 10.86687],
    [107.329931, 10.867107], [107.330293, 10.868648], [107.332586, 10.870663],
    [107.332103, 10.871137], [107.330896, 10.870308], [107.32812, 10.870782],
    [107.321964, 10.869241], [107.320757, 10.8709], [107.313521, 10.874088],
    [107.311789, 10.872754], [107.31128, 10.871753], [107.3124, 10.871086],
    [107.313827, 10.868218], [107.31274, 10.86675], [107.310576, 10.86759],
    [107.30816, 10.86759], [107.306665, 10.867349], [107.306747, 10.867369],
    [107.304924, 10.867751], [107.303429, 10.868917], [107.296978, 10.870727],
    [107.294378, 10.870969], [107.286752, 10.874527], [107.286181, 10.874455],
    [107.286334, 10.875864], [107.286183, 10.876841], [107.285475, 10.877125],
    [107.284767, 10.876851], [107.284445, 10.876293], [107.282417, 10.876103],
    [107.280625, 10.876314], [107.279831, 10.877863], [107.278458, 10.877609],
    [107.277439, 10.879177], [107.277372, 10.879373], [107.276602, 10.879939],
    [107.276546, 10.878682], [107.274498, 10.874582], [107.273916, 10.871566],
    [107.272713, 10.870247], [107.271826, 10.869866], [107.269515, 10.870057],
    [107.269016, 10.869807], [107.268434, 10.868674], [107.263906, 10.865398],
    [107.263269, 10.864146], [107.261606, 10.862682], [107.260528, 10.86026],
    [107.260478, 10.859411], [107.26081, 10.858278], [107.261797, 10.857195],
    [107.263543, 10.856564], [107.263881, 10.856003], [107.261276, 10.854256],
    [107.259369, 10.853652], [107.255765, 10.853598], [107.255272, 10.853255],
    [107.253986, 10.851704], [107.25295, 10.851639], [107.250977, 10.852183],
    [107.250958, 10.852218], [107.245915, 10.858296], [107.242057, 10.858146],
    [107.240815, 10.857227], [107.240471, 10.856007], [107.234566, 10.853432],
    [107.233894, 10.858524], [107.229172, 10.856057], [107.228501, 10.857658],
    [107.202249, 10.845405], [107.199423, 10.851492], [107.19712, 10.85159],
    [107.19692, 10.85204], [107.196233, 10.852377], [107.195833, 10.852363],
    [107.195833, 10.852054], [107.195332, 10.851492], [107.1881, 10.850074],
    [107.185196, 10.850552], [107.183407, 10.851901], [107.18232, 10.852322],
    [107.182148, 10.852996], [107.183508, 10.854795], [107.18355, 10.855483],
    [107.182935, 10.857773], [107.183021, 10.859108], [107.184638, 10.860879],
    [107.184509, 10.86123], [107.183322, 10.861595], [107.183035, 10.862143],
    [107.183239, 10.863136], [107.183852, 10.86403], [107.184623, 10.866917],
    [107.185935, 10.86679], [107.18447, 10.867043], [107.190563, 10.867666],
    [107.191198, 10.868289], [107.186628, 10.873774], [107.1799, 10.875644],
    [107.17533, 10.880381], [107.173046, 10.880631], [107.170888, 10.880007],
    [107.169989, 10.878768], [107.166902, 10.878817], [107.166055, 10.87916],
    [107.164213, 10.878964], [107.163416, 10.879551], [107.161723, 10.880138],
    [107.161325, 10.881018], [107.160229, 10.882094], [107.16018, 10.882045],
    [107.158686, 10.88224], [107.162669, 10.887913], [107.161878, 10.889489],
    [107.16027, 10.890136], [107.158794, 10.891741], [107.158478, 10.892776],
    [107.158715, 10.893993], [107.159453, 10.894744], [107.138714, 10.896176],
    [107.137291, 10.897185], [107.137261, 10.897567], [107.134287, 10.899175],
    [107.133731, 10.898983], [107.130019, 10.89578], [107.127015, 10.895106],
    [107.125706, 10.893757], [107.125599, 10.893167], [107.12635, 10.89224],
    [107.126436, 10.890744], [107.123775, 10.889838], [107.122917, 10.88889],
    [107.121093, 10.887878], [107.119891, 10.885602], [107.11944, 10.885097],
    [107.119247, 10.881641], [107.11944, 10.881262], [107.119054, 10.879702],
    [107.120127, 10.876289], [107.11944, 10.875088], [107.118153, 10.87416],
    [107.116077, 10.873702], [107.115902, 10.872173], [107.116801, 10.872517],
    [107.116977, 10.871936], [107.116637, 10.869727], [107.11543, 10.867971],
    [107.115069, 10.866168], [107.113961, 10.865446], [107.113434, 10.86537],
    [107.112173, 10.865834], [107.110352, 10.866006], [107.110088, 10.86662],
    [107.110275, 10.867169], [107.109529, 10.868688], [107.108487, 10.868785],
    [107.107116, 10.86788], [107.108267, 10.864476], [107.110077, 10.862246],
    [107.111536, 10.862031], [107.113774, 10.857915], [107.112875, 10.857323],
    [107.11226, 10.856493], [107.112425, 10.85505], [107.111427, 10.854522],
    [107.109693, 10.854263], [107.108388, 10.855513], [107.106447, 10.855944],
    [107.104055, 10.855599], [107.100995, 10.854156], [107.09857, 10.852119],
    [107.094797, 10.854263], [107.093568, 10.854543], [107.092855, 10.853811],
    [107.09257, 10.853003], [107.090596, 10.851952], [107.08713, 10.851683],
    [107.085759, 10.850595], [107.081334, 10.848821], [107.081443, 10.847743],
    [107.082014, 10.846925], [107.084471, 10.84575], [107.084712, 10.845147],
    [107.084405, 10.844339], [107.084317, 10.842734], [107.083725, 10.841807],
    [107.083045, 10.841473], [107.082628, 10.842055], [107.080752, 10.842335],
    [107.078789, 10.840805], [107.075783, 10.837444], [107.072397, 10.83621],
    [107.072134, 10.835197], [107.07254, 10.825533], [107.073077, 10.824154],
    [107.072891, 10.821503], [107.071739, 10.819736], [107.072145, 10.819327],
    [107.072781, 10.819327], [107.073988, 10.819155], [107.075172, 10.8184],
    [107.075688, 10.817258], [107.075929, 10.817054], [107.07662, 10.817161],
    [107.077048, 10.816978], [107.077388, 10.815653], [107.078057, 10.814554],
    [107.07832, 10.813229], [107.078737, 10.812722], [107.080076, 10.812808],
    [107.082028, 10.811558], [107.083026, 10.810287], [107.083871, 10.809878],
    [107.084496, 10.809899], [107.084968, 10.810298], [107.085922, 10.81047],
    [107.087041, 10.811375], [107.08918, 10.810621], [107.089103, 10.808811],
    [107.089531, 10.808294], [107.090902, 10.80769], [107.093436, 10.803057],
    [107.094084, 10.802701], [107.094786, 10.802788], [107.095093, 10.803337],
    [107.096815, 10.803941], [107.098164, 10.803876], [107.101126, 10.800956],
    [107.102091, 10.800697], [107.103506, 10.800708], [107.106874, 10.799361],
    [107.107883, 10.799372], [107.110088, 10.801592], [107.111514, 10.802033],
    [107.11279, 10.802109], [107.11382, 10.802698], [107.118166, 10.802946],
    [107.118943, 10.803277], [107.118699, 10.802412], [107.118695, 10.80209],
    [107.120479, 10.801101], [107.121668, 10.801106], [107.121743, 10.798425],
    [107.122165, 10.796997], [107.122587, 10.796587], [107.12393, 10.796169],
    [107.124094, 10.795925], [107.124113, 10.795419], [107.123767, 10.794752],
    [107.123682, 10.793988], [107.123856, 10.793409], [107.124792, 10.793326],
    [107.127316, 10.794499], [107.128243, 10.793993], [107.130613, 10.791399],
    [107.130861, 10.790571], [107.130257, 10.789973], [107.129845, 10.788464],
    [107.129845, 10.786978], [107.131029, 10.784798], [107.131872, 10.784126],
    [107.132217, 10.775433], [107.131367, 10.77392], [107.12858, 10.770073],
    [107.127147, 10.769659], [107.125386, 10.769576], [107.125205, 10.769072],
    [107.12453, 10.768156], [107.123258, 10.767249], [107.123254, 10.76781],
    [107.121395, 10.767728], [107.120571, 10.76724], [107.119382, 10.767227],
    [107.117677, 10.768155], [107.117429, 10.768063], [107.117002, 10.767566],
    [107.116328, 10.767654], [107.115724, 10.767985], [107.114057, 10.768233],
    [107.113467, 10.768077], [107.110597, 10.766246], [107.110067, 10.766075],
    [107.109145, 10.766899], [107.107792, 10.766485], [107.105418, 10.76648],
    [107.104743, 10.766894], [107.104364, 10.768073], [107.10374, 10.76848],
    [107.103249, 10.768488], [107.10255, 10.768228], [107.100288, 10.76941],
    [107.100186, 10.770491], [107.099183, 10.771154], [107.097579, 10.771564],
    [107.096389, 10.771568], [107.094973, 10.770072], [107.094088, 10.769662],
    [107.092935, 10.769509], [107.091886, 10.769672], [107.091897, 10.769676],
    [107.090736, 10.7695], [107.090459, 10.769174], [107.090459, 10.768658],
    [107.090224, 10.768142], [107.089202, 10.768061], [107.08869, 10.768346],
    [107.088179, 10.768319], [107.08811, 10.76764], [107.088773, 10.767192],
    [107.087917, 10.766486], [107.087322, 10.766595], [107.087101, 10.767083],
    [107.086659, 10.767409], [107.086065, 10.767246], [107.086161, 10.766215],
    [107.087253, 10.765061], [107.088442, 10.765047], [107.088414, 10.763744],
    [107.088525, 10.763621], [107.089202, 10.763757], [107.08952, 10.764002],
    [107.089865, 10.763893], [107.090128, 10.763499], [107.089962, 10.762739],
    [107.090045, 10.762223], [107.090971, 10.761789], [107.090932, 10.760036],
    [107.091235, 10.759358], [107.093166, 10.757706], [107.094655, 10.757028],
    [107.094103, 10.754942], [107.09631, 10.750824], [107.095758, 10.750905],
    [107.095124, 10.750499], [107.095041, 10.749984], [107.096172, 10.749279],
    [107.09653, 10.748629], [107.097523, 10.748548], [107.098185, 10.747437],
    [107.100888, 10.745242], [107.100777, 10.744484], [107.100863, 10.744233],
    [107.101553, 10.744502], [107.103191, 10.744502], [107.104111, 10.743852],
    [107.104772, 10.743852], [107.105088, 10.744177], [107.105591, 10.744163],
    [107.106278, 10.743668], [107.107033, 10.744158], [107.109907, 10.744297],
    [107.110378, 10.744687], [107.112167, 10.744839], [107.11329, 10.745609],
    [107.113773, 10.745686], [107.114713, 10.745506], [107.114791, 10.744673],
    [107.115222, 10.744583], [107.11564, 10.744685], [107.116136, 10.745263],
    [107.116488, 10.744916], [107.116475, 10.744339], [107.116815, 10.744198],
    [107.117442, 10.744172], [107.117833, 10.744506], [107.118016, 10.745096],
    [107.119139, 10.745006], [107.11987, 10.745352], [107.121123, 10.745442],
    [107.122325, 10.746019], [107.123003, 10.745596], [107.1235, 10.746289],
    [107.124126, 10.746533], [107.12756, 10.74652], [107.130328, 10.744506],
    [107.131164, 10.744429], [107.132456, 10.744839], [107.134336, 10.744673],
    [107.135237, 10.744762], [107.135407, 10.744185], [107.135825, 10.743929],
    [107.137339, 10.744762], [107.138096, 10.744762], [107.138801, 10.744031],
    [107.139702, 10.745], [107.140914, 10.74458], [107.142198, 10.74507],
    [107.14341, 10.74507], [107.144836, 10.74458], [107.148329, 10.74444],
    [107.150112, 10.74458], [107.15111, 10.744159], [107.153392, 10.744019],
    [107.155459, 10.74542], [107.156101, 10.746401], [107.157171, 10.746261],
    [107.158347, 10.747767], [107.159203, 10.748152], [107.160486, 10.748117],
    [107.161092, 10.748923], [107.162732, 10.749518], [107.163659, 10.750464],
    [107.164229, 10.751304], [107.165423, 10.752338], [107.168293, 10.752705],
    [107.171275, 10.755512], [107.171458, 10.756928], [107.172098, 10.758223],
    [107.173338, 10.759442], [107.173842, 10.76049], [107.175219, 10.76169],
    [107.178456, 10.762337], [107.180356, 10.766279], [107.181077, 10.76721],
    [107.184839, 10.768509], [107.187176, 10.770424], [107.187473, 10.770995],
    [107.187963, 10.771331], [107.193264, 10.77132], [107.194632, 10.771712],
    [107.197186, 10.771734], [107.201986, 10.773728], [107.20292, 10.774299],
    [107.20609, 10.774086], [107.206158, 10.769999], [107.2065, 10.769685],
    [107.206576, 10.762104], [107.206154, 10.758789], [107.206291, 10.758206],
    [107.207, 10.758], [107.207, 10.759], [107.208, 10.759],
    [107.211, 10.759], [107.211, 10.752], [107.214, 10.753],
    [107.215, 10.753], [107.216, 10.757], [107.218, 10.757],
    [107.219, 10.758], [107.220, 10.757], [107.220474, 10.756572],
    [107.221262, 10.756709], [107.221769, 10.756998], [107.222134, 10.757067],
    [107.222626, 10.757062], [107.223424, 10.757354], [107.225133, 10.758985],
    [107.225703, 10.759117], [107.226924, 10.760063], [107.226714, 10.762957],
    [107.226933, 10.763107], [107.227658, 10.762957], [107.22793, 10.762638],
    [107.228783, 10.76259], [107.231081, 10.76338], [107.23327, 10.762032],
    [107.236663, 10.76099], [107.238684, 10.76149], [107.239829, 10.761323],
    [107.240833, 10.760532], [107.241667, 10.758782], [107.244013, 10.759268], [107.244372, 10.759104]
]
