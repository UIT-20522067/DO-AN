import("../CamMy/data")
const ringsTN = [
    [107.136135, 11.099347],
    [107.136145, 11.099338],
    [107.141048, 11.099851],
    [107.143933, 11.099222],
    [107.145797, 11.099198],
    [107.147107, 11.099067],
    [107.148564, 11.098244],
    [107.151158, 11.097527],
    [107.152820, 11.096618],
    [107.154385, 11.096528],
    [107.156504, 11.096533],
    [107.157889, 11.096713],
    [107.162402, 11.096156],
    [107.164157, 11.095802],
    [107.167922, 11.094894],
    [107.166730, 11.092356],
    [107.166361, 11.090994],
    [107.166821, 11.089992],
    [107.165752, 11.087831],
    [107.166322, 11.090984],
    [107.166767, 11.089956],
    [107.1641439, 11.0842642],
    [107.173198, 11.081196],
    [107.182173, 11.080335],
    [107.185339, 11.079330],
    [107.191023, 11.075608],
    [107.190840, 11.073998],
    [107.193688, 11.069449],
    [107.194337, 11.066979],
    [107.195692, 11.065537],
    [107.195704, 11.064173],
    [107.196080, 11.060864],
    [107.196455, 11.059903],
    [107.197423, 11.059423],
    [107.197845, 11.059624],
    [107.198471, 11.059355],
    [107.198756, 11.058137],
    [107.199576, 11.057634],
    [107.199918, 11.056293],
    [107.198995, 11.054012],
    [107.198927, 11.053386],
    [107.199052, 11.052906],
    [107.199952, 11.052705],
    [107.200521, 11.052257],
    [107.202082, 11.052213],
    [107.202993, 11.051531],
    [107.203186, 11.051218],
    [107.204075, 11.051889],
    [107.204701, 11.052917],
    [107.205134, 11.053006],
    [107.205293, 11.051788],
    [107.206136, 11.051050],
    [107.207139, 11.050704],
    [107.207708, 11.050704],
    [107.210555, 11.051699],
    [107.211296, 11.051766],
    [107.212347, 11.053946],
    [107.212673, 11.053611],
    [107.212979, 11.053597],
    [107.213426, 11.054023],
    [107.213590, 11.054448],
    [107.214158, 11.054626],
    [107.214362, 11.054521],
    [107.214995, 11.054971],
    [107.215168, 11.055406],
    [107.215673, 11.055173],
    [107.215849, 11.055101],
    [107.216501, 11.055098],
    [107.216850, 11.055230],
    [107.217092, 11.055946],
    [107.217431, 11.056051],
    [107.217909, 11.056044],
    [107.219468, 11.057301],
    [107.220066, 11.058207],
    [107.220395, 11.058271],
    [107.220934, 11.057662],
    [107.221311, 11.057503],
    [107.222979, 11.057520],
    [107.224036, 11.057292],
    [107.225035, 11.057294],
    [107.225168, 11.057570],
    [107.225551, 11.057534],
    [107.225792, 11.057606],
    [107.226172, 11.057873],
    [107.226424, 11.057640],
    [107.226427, 11.057242],
    [107.226552, 11.056860],
    [107.226881, 11.056646],
    [107.228951, 11.057320],
    [107.230060, 11.058084],
    [107.233158, 11.058246],
    [107.236827, 11.060682],
    [107.237138, 11.060847],
    [107.237850, 11.060596],
    [107.238401, 11.060515],
    [107.239365, 11.060610],
    [107.240026, 11.061768],
    [107.240946, 11.061596],
    [107.241343, 11.061225],
    [107.241739, 11.061225],
    [107.241721, 11.060765],
    [107.243482, 11.059043],
    [107.245002, 11.058406],
    [107.245122, 11.057845],
    [107.245080, 11.057144],
    [107.246823, 11.056023],
    [107.247199, 11.054988],
    [107.247220, 11.052903],
    [107.246974, 11.052113],
    [107.247945, 11.051002],
    [107.248540, 11.049265],
    [107.246823, 11.047390],
    [107.248878, 11.046638],
    [107.250418, 11.046359],
    [107.251362, 11.045474],
    [107.254205, 11.044195],
    [107.255284, 11.044223],
    [107.255284, 11.044486],
    [107.255584, 11.044461],
    [107.256076, 11.044229],
    [107.257414, 11.044348],
    [107.258096, 11.044064],
    [107.258429, 11.042455],
    [107.257907, 11.041572],
    [107.257776, 11.039522],
    [107.257254, 11.039066],
    [107.257138, 11.038611],
    [107.257791, 11.037884],
    [107.258052, 11.037778],
    [107.258030, 11.037016],
    [107.257576, 11.035843],
    [107.258584, 11.034277],
    [107.258584, 11.034277],
    [107.258752, 11.032767],
    [107.255562, 11.029499],
    [107.255275, 11.028517],
    [107.256296, 11.026643],
    [107.255800, 11.025201],
    [107.255786, 11.023567],
    [107.254785, 11.022379],
    [107.254674, 11.020738],
    [107.254792, 11.018829],
    [107.251228, 11.017047],
    [107.247885, 11.018201],
    [107.244310, 11.018215],
    [107.242079, 11.017796],
    [107.239623, 11.015365],
    [107.238133, 11.015283],
    [107.237581, 11.015468],
    [107.237693, 11.016430],
    [107.237560, 11.017892],
    [107.237315, 11.018634],
    [107.237315, 11.020055],
    [107.237021, 11.021057],
    [107.235573, 11.022540],
    [107.233615, 11.022784],
    [107.233356, 11.022187],
    [107.233335, 11.020044],
    [107.233720, 11.018850],
    [107.234070, 11.015884],
    [107.233839, 11.015218],
    [107.234082, 11.015886],
    [107.233844, 11.015206],
    [107.233081, 11.014856],
    [107.230710, 11.014067],
    [107.229451, 11.013243],
    [107.228640, 11.010482],
    [107.227220, 11.009775],
    [107.226268, 11.010167],
    [107.224505, 11.010188],
    [107.222831, 11.011097],
    [107.221663, 11.010816],
    [107.221310, 11.009929],
    [107.221861, 10.973375],
    [107.207670, 10.973526],
    [107.200155, 10.982828],
    [107.197821, 10.987777],
    [107.195181, 10.987777],
    [107.195226, 10.981835],
    [107.195541, 10.981173],
    [107.193562, 10.977089],
    [107.190796, 10.973844],
    [107.189155, 10.970312],
    [107.188997, 10.968833],
    [107.187131, 10.966250],
    [107.186412, 10.964727],
    [107.186412, 10.964727],
    [107.186299, 10.963844],
    [107.184905, 10.962011],
    [107.183061, 10.960532],
    [107.182094, 10.958214],
    [107.177394, 10.952033],
    [107.176472, 10.949737],
    [107.176293, 10.945939],
    [107.176675, 10.944107],
    [107.174606, 10.939515],
    [107.174426, 10.935232],
    [107.175011, 10.934790],
    [107.175213, 10.934415],
    [107.175101, 10.933973],
    [107.174314, 10.933951],
    [107.173167, 10.933068],
    [107.172380, 10.931456],
    [107.172335, 10.930661],
    [107.172043, 10.929911],
    [107.171480, 10.929337],
    [107.171433, 10.928348],
    [107.171242, 10.927929],
    [107.170730, 10.927794],
    [107.170395, 10.927502],
    [107.170334, 10.927194],
    [107.170463, 10.926385],
    [107.170364, 10.925493],
    [107.169303, 10.923718],
    [107.168601, 10.923350],
    [107.168304, 10.922526],
    [107.168983, 10.921410],
    [107.169013, 10.919574],
    [107.168151, 10.918120],
    [107.167479, 10.917731],
    [107.166953, 10.916404],
    [107.167006, 10.915408],
    [107.167189, 10.914329],
    [107.167380, 10.914006],
    [107.167964, 10.913752],
    [107.167964, 10.913250],
    [107.167235, 10.912860],
    [107.166747, 10.912369],
    [107.166423, 10.911421],
    [107.166999, 10.909967],
    [107.167151, 10.909102],
    [107.167201, 10.907097],
    [107.166086, 10.907059],
    [107.165113, 10.906579],
    [107.163336, 10.904976],
    [107.161690, 10.904364],
    [107.160838, 10.903427],
    [107.159997, 10.902080],
    [107.159583, 10.901678],
    [107.159769, 10.901089],
    [107.159703, 10.900705],
    [107.159248, 10.900356],
    [107.159096, 10.899949],
    [107.159187, 10.899250],
    [107.159841, 10.899096],
    [107.159611, 10.898344],
    [107.159381, 10.897873],
    [107.159304, 10.897102],
    [107.159726, 10.895596],
    [107.159419, 10.894806],
    [107.142689, 10.895709],
    [107.138799, 10.896236],
    [107.137419, 10.897196],
    [107.137418, 10.897484],
    [107.136843, 10.898135],
    [107.135554, 10.898887],
    [107.134345, 10.899206],
    [107.133800, 10.898992],
    [107.133067, 10.898073],
    [107.131777, 10.896919],
    [107.130057, 10.895747],
    [107.128918, 10.895413],
    [107.127073, 10.895123],
    [107.126070, 10.894320],
    [107.125715, 10.893669],
    [107.125614, 10.893121],
    [107.126343, 10.892222],
    [107.126428, 10.891518],
    [107.126428, 10.890704],
    [107.125993, 10.890360],
    [107.125628, 10.890167],
    [107.124906, 10.890082],
    [107.123814, 10.889819],
    [107.122997, 10.888920],
    [107.121092, 10.887846],
    [107.120363, 10.886857],
    [107.119903, 10.885602],
    [107.119449, 10.885062],
    [107.119275, 10.884168],
    [107.119363, 10.883444],
    [107.119267, 10.882103],
    [107.119269, 10.881565],
    [107.119446, 10.881204],
    [107.119085, 10.879681],
    [107.119894, 10.877529],
    [107.120166, 10.876276],
    [107.119443, 10.875028],
    [107.118174, 10.874135],
    [107.116448, 10.873862],
    [107.116089, 10.873689],
    [107.115897, 10.873241],
    [107.115904, 10.872148],
    [107.116808, 10.872507],
    [107.116988, 10.871889],
    [107.116891, 10.870726],
    [107.116896, 10.870720],
    [107.116623, 10.869743],
    [107.115802, 10.868747],
    [107.115441, 10.867943],
    [107.115350, 10.866870],
    [107.115074, 10.866153],
    [107.113996, 10.865442],
    [107.113450, 10.865352],
    [107.112183, 10.865803],
    [107.110375, 10.865985],
    [107.110106, 10.866609],
    [107.110286, 10.867140],
    [107.110010, 10.867870],
    [107.109562, 10.868671],
    [107.108464, 10.868762],
    [107.109561, 10.868668],
    [107.109909, 10.867853],
    [107.110263, 10.867148],
    [107.110071, 10.866652],
    [107.110323, 10.865977],
    [107.112122, 10.865789],
    [107.113446, 10.865312],
    [107.113986, 10.865407],
    [107.115093, 10.866141],
    [107.115375, 10.866865],
    [107.115461, 10.867932],
    [107.115810, 10.868741],
    [107.116644, 10.869733],
    [107.116926, 10.870730],
    [107.117012, 10.871881],
    [107.116846, 10.872526],
    [107.115911, 10.872179],
    [107.115936, 10.873241],
    [107.116113, 10.873657],
    [107.116457, 10.873858],
    [107.118182, 10.874119],
    [107.119442, 10.875002],
    [107.120191, 10.876285],
    [107.119923, 10.877539],
    [107.119107, 10.879692],
    [107.119473, 10.881213],
    [107.119289, 10.881570],
    [107.118962, 10.879626],
    [107.118883, 10.879626],
    [107.120068, 10.876329],
    [107.119278, 10.875243],
    [107.118093, 10.874274],
    [107.116553, 10.874041],
    [107.115763, 10.873265],
    [107.116672, 10.872373],
    [107.116908, 10.871908],
    [107.116711, 10.870744],
    [107.116553, 10.869736],
    [107.115487, 10.868728],
    [107.115131, 10.866827],
    [107.114973, 10.866245],
    [107.114183, 10.865741],
    [107.113473, 10.865276],
    [107.113473, 10.865276],
    [107.112130, 10.865896],
    [107.110471, 10.866129],
    [107.110155, 10.866672],
    [107.110392, 10.867176],
    [107.109484, 10.868728],
    [107.108299, 10.868844],
    [107.106956, 10.867913],
    [107.108210, 10.864365],
    [107.110066, 10.862193],
    [107.111567, 10.861960],
    [107.111631, 10.861889],
    [107.113696, 10.857687],
    [107.112258, 10.856818],
    [107.112331, 10.855079],
    [107.111336, 10.854536],
    [107.109750, 10.854391],
    [107.108459, 10.855514],
    [107.106412, 10.856112],
    [107.104107, 10.855768],
    [107.100917, 10.854283],
    [107.098612, 10.852254],
    [107.094878, 10.854274],
    [107.093579, 10.854596],
    [107.092841, 10.853806],
    [107.092558, 10.853019],
    [107.090555, 10.851965],
    [107.088553, 10.851883],
    [107.087146, 10.851697],
    [107.085714, 10.850597],
    [107.083110, 10.849682],
    [107.081369, 10.849005],
    [107.079454, 10.849242],
    [107.077678, 10.850885],
    [107.076885, 10.851156],
    [107.076040, 10.851308],
    [107.074057, 10.851308],
    [107.070694, 10.852019],
    [107.068573, 10.851613],
    [107.068073, 10.851816],
    [107.068046, 10.852536],
    [107.067786, 10.853201],
    [107.067136, 10.852872],
    [107.066771, 10.851872],
    [107.066825, 10.851608],
    [107.067032, 10.851373],
    [107.066945, 10.851160],
    [107.066608, 10.850936],
    [107.066206, 10.851000],
    [107.065913, 10.851032],
    [107.065685, 10.850755],
    [107.065565, 10.850456],
    [107.065435, 10.850232],
    [107.065000, 10.849997],
    [107.064631, 10.850019],
    [107.064056, 10.850328],
    [107.063621, 10.850456],
    [107.063219, 10.850397],
    [107.062872, 10.850243],
    [107.062687, 10.850077],
    [107.062519, 10.849656],
    [107.062627, 10.849304],
    [107.062638, 10.848872],
    [107.062568, 10.848760],
    [107.062470, 10.848696],
    [107.062209, 10.848664],
    [107.061823, 10.848696],
    [107.060325, 10.849165],
    [107.060129, 10.849187],
    [107.060010, 10.849253],
    [107.060121, 10.849493],
    [107.060102, 10.849637],
    [107.059996, 10.849792],
    [107.059714, 10.850024],
    [107.059217, 10.850272],
    [107.059027, 10.850405],
    [107.058881, 10.850689],
    [107.058874, 10.851016],
    [107.058938, 10.851142],
    [107.059040, 10.851216],
    [107.059154, 10.851251],
    [107.059314, 10.851213],
    [107.059436, 10.851127],
    [107.059577, 10.851115],
    [107.059776, 10.851155],
    [107.060011, 10.851351],
    [107.060064, 10.851517],
    [107.060076, 10.851759],
    [107.060045, 10.852084],
    [107.059945, 10.852348],
    [107.059930, 10.852526],
    [107.059955, 10.852687],
    [107.060071, 10.852829],
    [107.060146, 10.852875],
    [107.060349, 10.852917],
    [107.060611, 10.852910],
    [107.061126, 10.853005],
    [107.061372, 10.853127],
    [107.061506, 10.853327],
    [107.061553, 10.853537],
    [107.061446, 10.854142],
    [107.061442, 10.854790],
    [107.061470, 10.854998],
    [107.061582, 10.855252],
    [107.061732, 10.855399],
    [107.061856, 10.855463],
    [107.062102, 10.855457],
    [107.062248, 10.855387],
    [107.062435, 10.855338],
    [107.063079, 10.855429],
    [107.063341, 10.855493],
    [107.063770, 10.855772],
    [107.063951, 10.856099],
    [107.063957, 10.856230],
    [107.063901, 10.856444],
    [107.063615, 10.857058],
    [107.063889, 10.858309],
    [107.064972, 10.859757],
    [107.066442, 10.862167],
    [107.067521, 10.863057],
    [107.067452, 10.877995],
    [107.076600, 10.878282],
    [107.077417, 10.878183],
    [107.077161, 10.879149],
    [107.077008, 10.881212],
    [107.076776, 10.882014],
    [107.076931, 10.882933],
    [107.077306, 10.883935],
    [107.077885, 10.886529],
    [107.078022, 10.887660],
    [107.078147, 10.887935],
    [107.079936, 10.886342],
    [107.080100, 10.886219],
    [107.081257, 10.887071],
    [107.082546, 10.885150],
    [107.083619, 10.883859],
    [107.083923, 10.883223],
    [107.083920, 10.881794],
    [107.084068, 10.881068],
    [107.084509, 10.880121],
    [107.085036, 10.879697],
    [107.085684, 10.879549],
    [107.086136, 10.880140],
    [107.086422, 10.881003],
    [107.087597, 10.882208],
    [107.088002, 10.882480],
    [107.088509, 10.882415],
    [107.088688, 10.882840],
    [107.088679, 10.883708],
    [107.089327, 10.884082],
    [107.089910, 10.885217],
    [107.089835, 10.885886],
    [107.089402, 10.886745],
    [107.089391, 10.887370],
    [107.089636, 10.887892],
    [107.090051, 10.888157],
    [107.090899, 10.887845],
    [107.092239, 10.888001],
    [107.092186, 10.889478],
    [107.092234, 10.889847],
    [107.093623, 10.889856],
    [107.094577, 10.890060],
    [107.095396, 10.890812],
    [107.096088, 10.892031],
    [107.096912, 10.892770],
    [107.098151, 10.892370],
    [107.099199, 10.896657],
    [107.099253, 10.898081],
    [107.098597, 10.900897],
    [107.097473, 10.903806],
    [107.097544, 10.906830],
    [107.097216, 10.908474],
    [107.096232, 10.911405],
    [107.095495, 10.913750],
    [107.095518, 10.914877],
    [107.097134, 10.918176],
    [107.098258, 10.919338],
    [107.098117, 10.920775],
    [107.096783, 10.921924],
    [107.096502, 10.922706],
    [107.096209, 10.925212],
    [107.096783, 10.927040],
    [107.096783, 10.928051],
    [107.091280, 10.928396],
    [107.091643, 10.929258],
    [107.094160, 10.932339],
    [107.095097, 10.933052],
    [107.093141, 10.934512],
    [107.093317, 10.940214],
    [107.094399, 10.940231],
    [107.095141, 10.942860],
    [107.095410, 10.945198],
    [107.094608, 10.945894],
    [107.094527, 10.946849],
    [107.094599, 10.948002],
    [107.094532, 10.948456],
    [107.094523, 10.948469],
    [107.093312, 10.949032],
    [107.093342, 10.950593],
    [107.111557, 10.952873],
    [107.113532, 10.952427],
    [107.113133, 10.956116],
    [107.112450, 10.958408],
    [107.112564, 10.958911],
    [107.113036, 10.959234],
    [107.113426, 10.960799],
    [107.111925, 10.961775],
    [107.111094, 10.963531],
    [107.111130, 10.964099],
    [107.110046, 10.966015],
    [107.109974, 10.966778],
    [107.109341, 10.967825],
    [107.108239, 10.968464],
    [107.106865, 10.968695],
    [107.106341, 10.969422],
    [107.107606, 10.974017],
    [107.111492, 10.973538],
    [107.111907, 10.973396],
    [107.113986, 10.973592],
    [107.115269, 10.973308],
    [107.116046, 10.972864],
    [107.118215, 10.972225],
    [107.120836, 10.972616],
    [107.121565, 10.973389],
    [107.121948, 10.973600],
    [107.122753, 10.973455],
    [107.123384, 10.973844],
    [107.124431, 10.975004],
    [107.124948, 10.975867],
    [107.126411, 10.978522],
    [107.127290, 10.978957],
    [107.129612, 10.978439],
    [107.129979, 10.978888],
    [107.129990, 10.979554],
    [107.126985, 10.983185],
    [107.126173, 10.983923],
    [107.125559, 10.986156],
    [107.124888, 10.987929],
    [107.120075, 10.990596],
    [107.119582, 10.991444],
    [107.119458, 10.993625],
    [107.121623, 10.999203],
    [107.121600, 11.003828],
    [107.122098, 11.005606],
    [107.123517, 11.008968],
    [107.122823, 11.010879],
    [107.120589, 11.010879],
    [107.120393, 11.011220],
    [107.119412, 11.011827],
    [107.118416, 11.010716],
    [107.117782, 11.010450],
    [107.117118, 11.010464],
    [107.116590, 11.010850],
    [107.116545, 11.011531],
    [107.117299, 11.014138],
    [107.117314, 11.014553],
    [107.116213, 11.015501],
    [107.115036, 11.015886],
    [107.114130, 11.016508],
    [107.113889, 11.017575],
    [107.113677, 11.018123],
    [107.112500, 11.019056],
    [107.111897, 11.020878],
    [107.111308, 11.021470],
    [107.111142, 11.022063],
    [107.111172, 11.022759],
    [107.107233, 11.024217],
    [107.107041, 11.025503],
    [107.107060, 11.027795],
    [107.106726, 11.028334],
    [107.105102, 11.029632],
    [107.104775, 11.038526],
    [107.103922, 11.041521],
    [107.103873, 11.042825],
    [107.103367, 11.043273],
    [107.102872, 11.044134],
    [107.103391, 11.046826],
    [107.103916, 11.047639],
    [107.104007, 11.049445],
    [107.104229, 11.050827],
    [107.105137, 11.052185],
    [107.105452, 11.053398],
    [107.105471, 11.055489],
    [107.105150, 11.058417],
    [107.105471, 11.059612],
    [107.108405, 11.062437],
    [107.108677, 11.064798],
    [107.107156, 11.070571],
    [107.107571, 11.071430],
    [107.108539, 11.071988],
    [107.109998, 11.072365],
    [107.110635, 11.072289],
    [107.111050, 11.071897],
    [107.111119, 11.071098],
    [107.111580, 11.070590],
    [107.112076, 11.070388],
    [107.112775, 11.070595],
    [107.115740, 11.074177],
    [107.117357, 11.078487],
    [107.117321, 11.079906],
    [107.117670, 11.081153],
    [107.117198, 11.082892],
    [107.116390, 11.083761],
    [107.119088, 11.086699],
    [107.121411, 11.090505],
    [107.123046, 11.091781],
    [107.127437, 11.092940],
    [107.130272, 11.094099],
    [107.134368, 11.098254],
    [107.136135, 11.099347]
]

const graphicAttTN = {
    "Huyện": "Thống Nhất",
    "Diện tích": '250,2 km²',
    "Dân số": '165.280 người'
};

const pointListTN = [
    {
        point: {
            type: "point",
            longitude: 107.1479098,
            latitude: 10.9519513,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường TH&THCS Lương Thế Vinh",
            "Địa chỉ": 'N2, Khu Hành Chính, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }, {
        point: {
            type: "point",
            longitude: 107.0996741,
            latitude: 10.9399358,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường TH&THCS Trần Hưng Đạo",
            "Địa chỉ": 'W4Q3+W6G, ẤP HƯNG NGHĨA, Quang Trung, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }, {
        point: {
            type: "point",
            longitude: 107.1685558,
            latitude: 11.0392005,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Duy Tân",
            "Địa chỉ": 'Gia Tân 3, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }, {
        point: {
            type: "point",
            longitude: 107.160831,
            latitude: 11.0392266,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Gia Kiệm",
            "Địa chỉ": '25MG+73G, Đường Vinh Sơn, ấp, Đường Đông Kim, Gia Kiệm, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }, {
        point: {
            type: "point",
            longitude: 107.1332349,
            latitude: 10.912003,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường TH&THCS Hùng Vương",
            "Địa chỉ": 'Thống Nhất, Đồng Nai, Việt Nam',
        }
    },
    {
        point: {
            type: "point",
            longitude: 107.1030749,
            latitude: 10.8708919,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Lý Tự Trọng",
            "Địa chỉ": 'V4C4+972, ấp 3, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }, {
        point: {
            type: "point",
            longitude: 107.182723,
            latitude: 11.0622812,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Nguyễn Đình Chiểu",
            "Địa chỉ": '356Q+W29, Gia Tân 2, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }, {
        point: {
            type: "point",
            longitude: 107.131352,
            latitude: 10.9457955,
        },
        markerSymbol: {
            type: "picture-marker",
            url: img,
            width: "48px",
            height: "48px",
        },
        pointAtt: {
            Name: "Trường THCS Ngô Quyền",
            "Địa chỉ": 'Bầu Hàm 2, Thống Nhất, Đồng Nai, Việt Nam',
        }
    }
]