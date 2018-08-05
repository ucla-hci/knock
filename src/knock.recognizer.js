//
//  machine learning model for recognizing pad vs. knuckle
//  - generated from weka
//
//  by xac@ucla.edu, 08/2018
//

var KnockClassifier = (function() {
  function KnockClassifier() {}
  KnockClassifier.classify = function(i) {
    var sums = [0, 0];
    sums[KnockClassifier_0.classify(i) | 0] += 3.1780538303479458;
    sums[KnockClassifier_1.classify(i) | 0] += 2.748256621580253;
    sums[KnockClassifier_2.classify(i) | 0] += 2.835824311596937;
    sums[KnockClassifier_3.classify(i) | 0] += 3.786859862474141;
    sums[KnockClassifier_4.classify(i) | 0] += 3.457253595297612;
    sums[KnockClassifier_5.classify(i) | 0] += 3.4228833863181634;
    sums[KnockClassifier_6.classify(i) | 0] += 2.886104297652418;
    sums[KnockClassifier_7.classify(i) | 0] += 3.799549562537716;
    sums[KnockClassifier_8.classify(i) | 0] += 3.474548732816542;
    sums[KnockClassifier_9.classify(i) | 0] += 3.4474577999217635;
    sums[KnockClassifier_10.classify(i) | 0] += 2.9320771498721214;
    sums[KnockClassifier_11.classify(i) | 0] += 3.0639816658290093;
    sums[KnockClassifier_12.classify(i) | 0] += 3.7627404954602914;
    sums[KnockClassifier_13.classify(i) | 0] += 4.138565912849035;
    sums[KnockClassifier_14.classify(i) | 0] += 3.2468486557436744;
    var maxV = sums[0];
    var maxI = 0;
    for (var j = 1; j < 2; j++) {
      if (sums[j] > maxV) {
        maxV = sums[j];
        maxI = j;
      }
    }
    return maxI;
  };
  return KnockClassifier;
})();
KnockClassifier["__class"] = "KnockClassifier";
var KnockClassifier_0 = (function() {
  function KnockClassifier_0() {}
  KnockClassifier_0.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_0.N478122d2516(i);
    return p;
  };
  KnockClassifier_0.N478122d2516 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_0.N6f152daa517(i);
    } else if (i[0] > 25.52) {
      p = KnockClassifier_0.N361947ea525(i);
    }
    return p;
  };
  KnockClassifier_0.N6f152daa517 = function(i) {
    var p = NaN;
    if (i[23] == null) {
      p = 1;
    } else if (i[23] <= -15.69) {
      p = KnockClassifier_0.N57692cdf518(i);
    } else if (i[23] > -15.69) {
      p = KnockClassifier_0.N13bd05a9523(i);
    }
    return p;
  };
  KnockClassifier_0.N57692cdf518 = function(i) {
    var p = NaN;
    if (i[9] == null) {
      p = 1;
    } else if (i[9] <= 0.47) {
      p = KnockClassifier_0.N3a01114e519(i);
    } else if (i[9] > 0.47) {
      p = KnockClassifier_0.N37c22d16521(i);
    }
    return p;
  };
  KnockClassifier_0.N3a01114e519 = function(i) {
    var p = NaN;
    if (i[27] == null) {
      p = 1;
    } else if (i[27] <= -1.76) {
      p = 1;
    } else if (i[27] > -1.76) {
      p = KnockClassifier_0.N1c1735a2520(i);
    }
    return p;
  };
  KnockClassifier_0.N1c1735a2520 = function(i) {
    var p = NaN;
    if (i[14] == null) {
      p = 0;
    } else if (i[14] <= -0.12) {
      p = 0;
    } else if (i[14] > -0.12) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_0.N37c22d16521 = function(i) {
    var p = NaN;
    if (i[26] == null) {
      p = 1;
    } else if (i[26] <= 17.09) {
      p = 1;
    } else if (i[26] > 17.09) {
      p = KnockClassifier_0.N2d1e1bf3522(i);
    }
    return p;
  };
  KnockClassifier_0.N2d1e1bf3522 = function(i) {
    var p = NaN;
    if (i[7] == null) {
      p = 1;
    } else if (i[7] <= -0.3) {
      p = 1;
    } else if (i[7] > -0.3) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_0.N13bd05a9523 = function(i) {
    var p = NaN;
    if (i[20] == null) {
      p = 1;
    } else if (i[20] <= -4.81) {
      p = 1;
    } else if (i[20] > -4.81) {
      p = KnockClassifier_0.N5ebea45e524(i);
    }
    return p;
  };
  KnockClassifier_0.N5ebea45e524 = function(i) {
    var p = NaN;
    if (i[27] == null) {
      p = 1;
    } else if (i[27] <= -0.72) {
      p = 1;
    } else if (i[27] > -0.72) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_0.N361947ea525 = function(i) {
    var p = NaN;
    if (i[3] == null) {
      p = 0;
    } else if (i[3] <= 0.17) {
      p = KnockClassifier_0.N35c06f65526(i);
    } else if (i[3] > 0.17) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_0.N35c06f65526 = function(i) {
    var p = NaN;
    if (i[13] == null) {
      p = 1;
    } else if (i[13] <= -5.84) {
      p = 1;
    } else if (i[13] > -5.84) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_0;
})();
KnockClassifier_0["__class"] = "KnockClassifier_0";
var KnockClassifier_1 = (function() {
  function KnockClassifier_1() {}
  KnockClassifier_1.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_1.N6cd16b74527(i);
    return p;
  };
  KnockClassifier_1.N6cd16b74527 = function(i) {
    var p = NaN;
    if (i[2] == null) {
      p = 1;
    } else if (i[2] <= -0.06) {
      p = KnockClassifier_1.N28e5c47c528(i);
    } else if (i[2] > -0.06) {
      p = KnockClassifier_1.N1e51e032531(i);
    }
    return p;
  };
  KnockClassifier_1.N28e5c47c528 = function(i) {
    var p = NaN;
    if (i[23] == null) {
      p = 1;
    } else if (i[23] <= -24.05) {
      p = 1;
    } else if (i[23] > -24.05) {
      p = KnockClassifier_1.N4c6bdde529(i);
    }
    return p;
  };
  KnockClassifier_1.N4c6bdde529 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_1.N13db3c45530(i);
    } else if (i[0] > 25.52) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_1.N13db3c45530 = function(i) {
    var p = NaN;
    if (i[21] == null) {
      p = 0;
    } else if (i[21] <= 4.98) {
      p = 0;
    } else if (i[21] > 4.98) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_1.N1e51e032531 = function(i) {
    var p = NaN;
    if (i[20] == null) {
      p = 1;
    } else if (i[20] <= -5.92) {
      p = KnockClassifier_1.N1156022b532(i);
    } else if (i[20] > -5.92) {
      p = KnockClassifier_1.N25a85df1533(i);
    }
    return p;
  };
  KnockClassifier_1.N1156022b532 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = 1;
    } else if (i[0] > 25.52) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_1.N25a85df1533 = function(i) {
    var p = NaN;
    if (i[25] == null) {
      p = 1;
    } else if (i[25] <= -12.12) {
      p = KnockClassifier_1.N50af8c87534(i);
    } else if (i[25] > -12.12) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_1.N50af8c87534 = function(i) {
    var p = NaN;
    if (i[3] == null) {
      p = 0;
    } else if (i[3] <= -0.09) {
      p = 0;
    } else if (i[3] > -0.09) {
      p = 1;
    }
    return p;
  };
  return KnockClassifier_1;
})();
KnockClassifier_1["__class"] = "KnockClassifier_1";
var KnockClassifier_2 = (function() {
  function KnockClassifier_2() {}
  KnockClassifier_2.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_2.N35331c73535(i);
    return p;
  };
  KnockClassifier_2.N35331c73535 = function(i) {
    var p = NaN;
    if (i[17] == null) {
      p = 1;
    } else if (i[17] <= -3.13) {
      p = 1;
    } else if (i[17] > -3.13) {
      p = KnockClassifier_2.N2e90dd4e536(i);
    }
    return p;
  };
  KnockClassifier_2.N2e90dd4e536 = function(i) {
    var p = NaN;
    if (i[13] == null) {
      p = 1;
    } else if (i[13] <= -6.9) {
      p = 1;
    } else if (i[13] > -6.9) {
      p = KnockClassifier_2.N28b143c4537(i);
    }
    return p;
  };
  KnockClassifier_2.N28b143c4537 = function(i) {
    var p = NaN;
    if (i[21] == null) {
      p = 0;
    } else if (i[21] <= 87.22) {
      p = KnockClassifier_2.Ndd80dbb538(i);
    } else if (i[21] > 87.22) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_2.Ndd80dbb538 = function(i) {
    var p = NaN;
    if (i[16] == null) {
      p = 0;
    } else if (i[16] <= -1.37) {
      p = KnockClassifier_2.N636d7716539(i);
    } else if (i[16] > -1.37) {
      p = KnockClassifier_2.N7fa77fba542(i);
    }
    return p;
  };
  KnockClassifier_2.N636d7716539 = function(i) {
    var p = NaN;
    if (i[7] == null) {
      p = 1;
    } else if (i[7] <= -0.41) {
      p = 1;
    } else if (i[7] > -0.41) {
      p = KnockClassifier_2.N27a57859540(i);
    }
    return p;
  };
  KnockClassifier_2.N27a57859540 = function(i) {
    var p = NaN;
    if (i[7] == null) {
      p = 0;
    } else if (i[7] <= 0.5) {
      p = 0;
    } else if (i[7] > 0.5) {
      p = KnockClassifier_2.N60802f64541(i);
    }
    return p;
  };
  KnockClassifier_2.N60802f64541 = function(i) {
    var p = NaN;
    if (i[26] == null) {
      p = 1;
    } else if (i[26] <= 5.81) {
      p = 1;
    } else if (i[26] > 5.81) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_2.N7fa77fba542 = function(i) {
    var p = NaN;
    if (i[4] == null) {
      p = 1;
    } else if (i[4] <= 0.85) {
      p = 1;
    } else if (i[4] > 0.85) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_2;
})();
KnockClassifier_2["__class"] = "KnockClassifier_2";
var KnockClassifier_3 = (function() {
  function KnockClassifier_3() {}
  KnockClassifier_3.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_3.N4db2cdcf543(i);
    return p;
  };
  KnockClassifier_3.N4db2cdcf543 = function(i) {
    var p = NaN;
    if (i[5] == null) {
      p = 0;
    } else if (i[5] <= 0.67) {
      p = KnockClassifier_3.N15e5f8e3544(i);
    } else if (i[5] > 0.67) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_3.N15e5f8e3544 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_3.N2d370a50545(i);
    } else if (i[0] > 25.52) {
      p = KnockClassifier_3.N1fb939ff550(i);
    }
    return p;
  };
  KnockClassifier_3.N2d370a50545 = function(i) {
    var p = NaN;
    if (i[3] == null) {
      p = 1;
    } else if (i[3] <= -0.12) {
      p = KnockClassifier_3.N78862160546(i);
    } else if (i[3] > -0.12) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_3.N78862160546 = function(i) {
    var p = NaN;
    if (i[14] == null) {
      p = 1;
    } else if (i[14] <= 0.4) {
      p = 1;
    } else if (i[14] > 0.4) {
      p = KnockClassifier_3.N2df96371547(i);
    }
    return p;
  };
  KnockClassifier_3.N2df96371547 = function(i) {
    var p = NaN;
    if (i[8] == null) {
      p = 1;
    } else if (i[8] <= -0.86) {
      p = 1;
    } else if (i[8] > -0.86) {
      p = KnockClassifier_3.N4fefa74b548(i);
    }
    return p;
  };
  KnockClassifier_3.N4fefa74b548 = function(i) {
    var p = NaN;
    if (i[4] == null) {
      p = 1;
    } else if (i[4] <= 0.38) {
      p = KnockClassifier_3.N7ed055ec549(i);
    } else if (i[4] > 0.38) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_3.N7ed055ec549 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 0;
    } else if (i[11] <= 0.49) {
      p = 0;
    } else if (i[11] > 0.49) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_3.N1fb939ff550 = function(i) {
    var p = NaN;
    if (i[10] == null) {
      p = 1;
    } else if (i[10] <= -0.13) {
      p = KnockClassifier_3.N398ea49e551(i);
    } else if (i[10] > -0.13) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_3.N398ea49e551 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -1.12) {
      p = 1;
    } else if (i[11] > -1.12) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_3;
})();
KnockClassifier_3["__class"] = "KnockClassifier_3";
var KnockClassifier_4 = (function() {
  function KnockClassifier_4() {}
  KnockClassifier_4.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_4.N43d99e97552(i);
    return p;
  };
  KnockClassifier_4.N43d99e97552 = function(i) {
    var p = NaN;
    if (i[13] == null) {
      p = 1;
    } else if (i[13] <= -5.7) {
      p = 1;
    } else if (i[13] > -5.7) {
      p = KnockClassifier_4.N43aee4e553(i);
    }
    return p;
  };
  KnockClassifier_4.N43aee4e553 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_4.N38f3450d554(i);
    } else if (i[0] > 25.52) {
      p = KnockClassifier_4.N3da14801560(i);
    }
    return p;
  };
  KnockClassifier_4.N38f3450d554 = function(i) {
    var p = NaN;
    if (i[30] == null) {
      p = 1;
    } else if (i[30] <= -0.47) {
      p = 1;
    } else if (i[30] > -0.47) {
      p = KnockClassifier_4.N6b3a75b0555(i);
    }
    return p;
  };
  KnockClassifier_4.N6b3a75b0555 = function(i) {
    var p = NaN;
    if (i[8] == null) {
      p = 1;
    } else if (i[8] <= -0.86) {
      p = 1;
    } else if (i[8] > -0.86) {
      p = KnockClassifier_4.N4b04accf556(i);
    }
    return p;
  };
  KnockClassifier_4.N4b04accf556 = function(i) {
    var p = NaN;
    if (i[15] == null) {
      p = 0;
    } else if (i[15] <= 0.03) {
      p = KnockClassifier_4.N1fed7083557(i);
    } else if (i[15] > 0.03) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_4.N1fed7083557 = function(i) {
    var p = NaN;
    if (i[24] == null) {
      p = 0;
    } else if (i[24] <= 67.67) {
      p = KnockClassifier_4.N1d75b8d5558(i);
    } else if (i[24] > 67.67) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_4.N1d75b8d5558 = function(i) {
    var p = NaN;
    if (i[10] == null) {
      p = 0;
    } else if (i[10] <= 0.11) {
      p = 0;
    } else if (i[10] > 0.11) {
      p = KnockClassifier_4.N1bb9b70f559(i);
    }
    return p;
  };
  KnockClassifier_4.N1bb9b70f559 = function(i) {
    var p = NaN;
    if (i[26] == null) {
      p = 1;
    } else if (i[26] <= 6.21) {
      p = 1;
    } else if (i[26] > 6.21) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_4.N3da14801560 = function(i) {
    var p = NaN;
    if (i[5] == null) {
      p = 0;
    } else if (i[5] <= 0.41) {
      p = 0;
    } else if (i[5] > 0.41) {
      p = 1;
    }
    return p;
  };
  return KnockClassifier_4;
})();
KnockClassifier_4["__class"] = "KnockClassifier_4";
var KnockClassifier_5 = (function() {
  function KnockClassifier_5() {}
  KnockClassifier_5.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_5.N277e5943561(i);
    return p;
  };
  KnockClassifier_5.N277e5943561 = function(i) {
    var p = NaN;
    if (i[9] == null) {
      p = 0;
    } else if (i[9] <= 0.09) {
      p = 0;
    } else if (i[9] > 0.09) {
      p = KnockClassifier_5.N581651f6562(i);
    }
    return p;
  };
  KnockClassifier_5.N581651f6562 = function(i) {
    var p = NaN;
    if (i[22] == null) {
      p = 1;
    } else if (i[22] <= 1.35) {
      p = KnockClassifier_5.N215f1aa8563(i);
    } else if (i[22] > 1.35) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_5.N215f1aa8563 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_5.N6acf1cb5564(i);
    } else if (i[0] > 25.52) {
      p = KnockClassifier_5.N66f08b4b567(i);
    }
    return p;
  };
  KnockClassifier_5.N6acf1cb5564 = function(i) {
    var p = NaN;
    if (i[27] == null) {
      p = 1;
    } else if (i[27] <= -0.23) {
      p = 1;
    } else if (i[27] > -0.23) {
      p = KnockClassifier_5.N4365e5db565(i);
    }
    return p;
  };
  KnockClassifier_5.N4365e5db565 = function(i) {
    var p = NaN;
    if (i[9] == null) {
      p = 0;
    } else if (i[9] <= 0.53) {
      p = KnockClassifier_5.N56d5af6e566(i);
    } else if (i[9] > 0.53) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_5.N56d5af6e566 = function(i) {
    var p = NaN;
    if (i[20] == null) {
      p = 1;
    } else if (i[20] <= -4.62) {
      p = 1;
    } else if (i[20] > -4.62) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_5.N66f08b4b567 = function(i) {
    var p = NaN;
    if (i[13] == null) {
      p = 1;
    } else if (i[13] <= -5.64) {
      p = 1;
    } else if (i[13] > -5.64) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_5;
})();
KnockClassifier_5["__class"] = "KnockClassifier_5";
var KnockClassifier_6 = (function() {
  function KnockClassifier_6() {}
  KnockClassifier_6.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_6.N3a491db9568(i);
    return p;
  };
  KnockClassifier_6.N3a491db9568 = function(i) {
    var p = NaN;
    if (i[26] == null) {
      p = 1;
    } else if (i[26] <= -3.02) {
      p = KnockClassifier_6.N163e7a94569(i);
    } else if (i[26] > -3.02) {
      p = KnockClassifier_6.N5fe195f4570(i);
    }
    return p;
  };
  KnockClassifier_6.N163e7a94569 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -2.53) {
      p = 1;
    } else if (i[11] > -2.53) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_6.N5fe195f4570 = function(i) {
    var p = NaN;
    if (i[15] == null) {
      p = 1;
    } else if (i[15] <= -3.83) {
      p = 1;
    } else if (i[15] > -3.83) {
      p = KnockClassifier_6.N533bf759571(i);
    }
    return p;
  };
  KnockClassifier_6.N533bf759571 = function(i) {
    var p = NaN;
    if (i[6] == null) {
      p = 0;
    } else if (i[6] <= 0.12) {
      p = KnockClassifier_6.N5ec1ec0572(i);
    } else if (i[6] > 0.12) {
      p = KnockClassifier_6.N4787e015574(i);
    }
    return p;
  };
  KnockClassifier_6.N5ec1ec0572 = function(i) {
    var p = NaN;
    if (i[21] == null) {
      p = 0;
    } else if (i[21] <= 49.09) {
      p = KnockClassifier_6.N50d6d249573(i);
    } else if (i[21] > 49.09) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_6.N50d6d249573 = function(i) {
    var p = NaN;
    if (i[17] == null) {
      p = 1;
    } else if (i[17] <= -2.86) {
      p = 1;
    } else if (i[17] > -2.86) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_6.N4787e015574 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = 1;
    } else if (i[0] > 25.52) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_6;
})();
KnockClassifier_6["__class"] = "KnockClassifier_6";
var KnockClassifier_7 = (function() {
  function KnockClassifier_7() {}
  KnockClassifier_7.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_7.N2988a763575(i);
    return p;
  };
  KnockClassifier_7.N2988a763575 = function(i) {
    var p = NaN;
    if (i[3] == null) {
      p = 0;
    } else if (i[3] <= 0.21) {
      p = KnockClassifier_7.N4aa569e2576(i);
    } else if (i[3] > 0.21) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_7.N4aa569e2576 = function(i) {
    var p = NaN;
    if (i[7] == null) {
      p = 0;
    } else if (i[7] <= 0.84) {
      p = KnockClassifier_7.N31ca9ab7577(i);
    } else if (i[7] > 0.84) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_7.N31ca9ab7577 = function(i) {
    var p = NaN;
    if (i[30] == null) {
      p = 1;
    } else if (i[30] <= 0.84) {
      p = KnockClassifier_7.N6c737dea578(i);
    } else if (i[30] > 0.84) {
      p = KnockClassifier_7.N1ab7315b581(i);
    }
    return p;
  };
  KnockClassifier_7.N6c737dea578 = function(i) {
    var p = NaN;
    if (i[28] == null) {
      p = 1;
    } else if (i[28] <= -4.14) {
      p = KnockClassifier_7.N124fc546579(i);
    } else if (i[28] > -4.14) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_7.N124fc546579 = function(i) {
    var p = NaN;
    if (i[15] == null) {
      p = 1;
    } else if (i[15] <= -0.62) {
      p = KnockClassifier_7.N3320800e580(i);
    } else if (i[15] > -0.62) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_7.N3320800e580 = function(i) {
    var p = NaN;
    if (i[2] == null) {
      p = 1;
    } else if (i[2] <= 0.27) {
      p = 1;
    } else if (i[2] > 0.27) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_7.N1ab7315b581 = function(i) {
    var p = NaN;
    if (i[20] == null) {
      p = 0;
    } else if (i[20] <= -7.16) {
      p = KnockClassifier_7.N71095b10582(i);
    } else if (i[20] > -7.16) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_7.N71095b10582 = function(i) {
    var p = NaN;
    if (i[1] == null) {
      p = 1;
    } else if (i[1] <= 0.73) {
      p = 1;
    } else if (i[1] > 0.73) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_7;
})();
KnockClassifier_7["__class"] = "KnockClassifier_7";
var KnockClassifier_8 = (function() {
  function KnockClassifier_8() {}
  KnockClassifier_8.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_8.N1d39b16a583(i);
    return p;
  };
  KnockClassifier_8.N1d39b16a583 = function(i) {
    var p = NaN;
    if (i[9] == null) {
      p = 0;
    } else if (i[9] <= 0.09) {
      p = 0;
    } else if (i[9] > 0.09) {
      p = KnockClassifier_8.N36aeb523584(i);
    }
    return p;
  };
  KnockClassifier_8.N36aeb523584 = function(i) {
    var p = NaN;
    if (i[3] == null) {
      p = 0;
    } else if (i[3] <= -0.56) {
      p = KnockClassifier_8.N7f628e1585(i);
    } else if (i[3] > -0.56) {
      p = KnockClassifier_8.N1218e24587(i);
    }
    return p;
  };
  KnockClassifier_8.N7f628e1585 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 0;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_8.N31f5cfdc586(i);
    } else if (i[0] > 25.52) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_8.N31f5cfdc586 = function(i) {
    var p = NaN;
    if (i[8] == null) {
      p = 1;
    } else if (i[8] <= -0.46) {
      p = 1;
    } else if (i[8] > -0.46) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_8.N1218e24587 = function(i) {
    var p = NaN;
    if (i[23] == null) {
      p = 1;
    } else if (i[23] <= -25.81) {
      p = KnockClassifier_8.N41fade10588(i);
    } else if (i[23] > -25.81) {
      p = KnockClassifier_8.N3d090e47589(i);
    }
    return p;
  };
  KnockClassifier_8.N41fade10588 = function(i) {
    var p = NaN;
    if (i[27] == null) {
      p = 1;
    } else if (i[27] <= 6.19) {
      p = 1;
    } else if (i[27] > 6.19) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_8.N3d090e47589 = function(i) {
    var p = NaN;
    if (i[23] == null) {
      p = 0;
    } else if (i[23] <= -6.64) {
      p = KnockClassifier_8.N1d88769f590(i);
    } else if (i[23] > -6.64) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_8.N1d88769f590 = function(i) {
    var p = NaN;
    if (i[20] == null) {
      p = 1;
    } else if (i[20] <= -4.62) {
      p = 1;
    } else if (i[20] > -4.62) {
      p = KnockClassifier_8.N6a23cfde591(i);
    }
    return p;
  };
  KnockClassifier_8.N6a23cfde591 = function(i) {
    var p = NaN;
    if (i[30] == null) {
      p = 1;
    } else if (i[30] <= -0.83) {
      p = 1;
    } else if (i[30] > -0.83) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_8;
})();
KnockClassifier_8["__class"] = "KnockClassifier_8";
var KnockClassifier_9 = (function() {
  function KnockClassifier_9() {}
  KnockClassifier_9.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_9.N55242e42592(i);
    return p;
  };
  KnockClassifier_9.N55242e42592 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -0.39) {
      p = KnockClassifier_9.N3a591ab9593(i);
    } else if (i[11] > -0.39) {
      p = KnockClassifier_9.N33d8d0e7598(i);
    }
    return p;
  };
  KnockClassifier_9.N3a591ab9593 = function(i) {
    var p = NaN;
    if (i[5] == null) {
      p = 0;
    } else if (i[5] <= -0.27) {
      p = 0;
    } else if (i[5] > -0.27) {
      p = KnockClassifier_9.N2fe9859c594(i);
    }
    return p;
  };
  KnockClassifier_9.N2fe9859c594 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -3.75) {
      p = 1;
    } else if (i[11] > -3.75) {
      p = KnockClassifier_9.Nc42dd57595(i);
    }
    return p;
  };
  KnockClassifier_9.Nc42dd57595 = function(i) {
    var p = NaN;
    if (i[21] == null) {
      p = 0;
    } else if (i[21] <= -1.35) {
      p = KnockClassifier_9.N79d1810a596(i);
    } else if (i[21] > -1.35) {
      p = KnockClassifier_9.N296ef601597(i);
    }
    return p;
  };
  KnockClassifier_9.N79d1810a596 = function(i) {
    var p = NaN;
    if (i[8] == null) {
      p = 0;
    } else if (i[8] <= -0.13) {
      p = 0;
    } else if (i[8] > -0.13) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_9.N296ef601597 = function(i) {
    var p = NaN;
    if (i[1] == null) {
      p = 1;
    } else if (i[1] <= 0.65) {
      p = 1;
    } else if (i[1] > 0.65) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_9.N33d8d0e7598 = function(i) {
    var p = NaN;
    if (i[6] == null) {
      p = 1;
    } else if (i[6] <= -0.46) {
      p = KnockClassifier_9.N5f7b0848599(i);
    } else if (i[6] > -0.46) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_9.N5f7b0848599 = function(i) {
    var p = NaN;
    if (i[1] == null) {
      p = 1;
    } else if (i[1] <= 1.22) {
      p = KnockClassifier_9.N65cdff1600(i);
    } else if (i[1] > 1.22) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_9.N65cdff1600 = function(i) {
    var p = NaN;
    if (i[12] == null) {
      p = 0;
    } else if (i[12] <= -0.51) {
      p = 0;
    } else if (i[12] > -0.51) {
      p = 1;
    }
    return p;
  };
  return KnockClassifier_9;
})();
KnockClassifier_9["__class"] = "KnockClassifier_9";
var KnockClassifier_10 = (function() {
  function KnockClassifier_10() {}
  KnockClassifier_10.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_10.N3b724a7a601(i);
    return p;
  };
  KnockClassifier_10.N3b724a7a601 = function(i) {
    var p = NaN;
    if (i[13] == null) {
      p = 1;
    } else if (i[13] <= -3.62) {
      p = KnockClassifier_10.N4c77ae13602(i);
    } else if (i[13] > -3.62) {
      p = KnockClassifier_10.N4545889d603(i);
    }
    return p;
  };
  KnockClassifier_10.N4c77ae13602 = function(i) {
    var p = NaN;
    if (i[5] == null) {
      p = 0;
    } else if (i[5] <= -0.32) {
      p = 0;
    } else if (i[5] > -0.32) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_10.N4545889d603 = function(i) {
    var p = NaN;
    if (i[20] == null) {
      p = 1;
    } else if (i[20] <= -4.81) {
      p = KnockClassifier_10.N580c1ef2604(i);
    } else if (i[20] > -4.81) {
      p = KnockClassifier_10.N3c3cf07605(i);
    }
    return p;
  };
  KnockClassifier_10.N580c1ef2604 = function(i) {
    var p = NaN;
    if (i[28] == null) {
      p = 0;
    } else if (i[28] <= -4.75) {
      p = 0;
    } else if (i[28] > -4.75) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_10.N3c3cf07605 = function(i) {
    var p = NaN;
    if (i[19] == null) {
      p = 0;
    } else if (i[19] <= 7.69) {
      p = KnockClassifier_10.N2c4cd67f606(i);
    } else if (i[19] > 7.69) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_10.N2c4cd67f606 = function(i) {
    var p = NaN;
    if (i[14] == null) {
      p = 1;
    } else if (i[14] <= 0.32) {
      p = 1;
    } else if (i[14] > 0.32) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_10;
})();
KnockClassifier_10["__class"] = "KnockClassifier_10";
var KnockClassifier_11 = (function() {
  function KnockClassifier_11() {}
  KnockClassifier_11.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_11.N68964291607(i);
    return p;
  };
  KnockClassifier_11.N68964291607 = function(i) {
    var p = NaN;
    if (i[24] == null) {
      p = 0;
    } else if (i[24] <= 13.6) {
      p = KnockClassifier_11.N60ec733b608(i);
    } else if (i[24] > 13.6) {
      p = KnockClassifier_11.N43815833609(i);
    }
    return p;
  };
  KnockClassifier_11.N60ec733b608 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -3.75) {
      p = 1;
    } else if (i[11] > -3.75) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_11.N43815833609 = function(i) {
    var p = NaN;
    if (i[2] == null) {
      p = 1;
    } else if (i[2] <= 0.54) {
      p = KnockClassifier_11.N60c59ee4610(i);
    } else if (i[2] > 0.54) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_11.N60c59ee4610 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = 1;
    } else if (i[0] > 25.52) {
      p = KnockClassifier_11.N4e42bc5e611(i);
    }
    return p;
  };
  KnockClassifier_11.N4e42bc5e611 = function(i) {
    var p = NaN;
    if (i[26] == null) {
      p = 1;
    } else if (i[26] <= -2.13) {
      p = 1;
    } else if (i[26] > -2.13) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_11;
})();
KnockClassifier_11["__class"] = "KnockClassifier_11";
var KnockClassifier_12 = (function() {
  function KnockClassifier_12() {}
  KnockClassifier_12.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_12.N7f5ce775612(i);
    return p;
  };
  KnockClassifier_12.N7f5ce775612 = function(i) {
    var p = NaN;
    if (i[29] == null) {
      p = 1;
    } else if (i[29] <= 12.92) {
      p = KnockClassifier_12.N2c5ff3a6613(i);
    } else if (i[29] > 12.92) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_12.N2c5ff3a6613 = function(i) {
    var p = NaN;
    if (i[9] == null) {
      p = 0;
    } else if (i[9] <= 0.09) {
      p = 0;
    } else if (i[9] > 0.09) {
      p = KnockClassifier_12.N4f752e0c614(i);
    }
    return p;
  };
  KnockClassifier_12.N4f752e0c614 = function(i) {
    var p = NaN;
    if (i[21] == null) {
      p = 1;
    } else if (i[21] <= 26.05) {
      p = KnockClassifier_12.N16223e95615(i);
    } else if (i[21] > 26.05) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_12.N16223e95615 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 1;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_12.N223ab38d616(i);
    } else if (i[0] > 25.52) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_12.N223ab38d616 = function(i) {
    var p = NaN;
    if (i[1] == null) {
      p = 1;
    } else if (i[1] <= 0.81) {
      p = KnockClassifier_12.N3be1ff89617(i);
    } else if (i[1] > 0.81) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_12.N3be1ff89617 = function(i) {
    var p = NaN;
    if (i[14] == null) {
      p = 1;
    } else if (i[14] <= 0.84) {
      p = KnockClassifier_12.N724f9a15618(i);
    } else if (i[14] > 0.84) {
      p = KnockClassifier_12.N3c627388621(i);
    }
    return p;
  };
  KnockClassifier_12.N724f9a15618 = function(i) {
    var p = NaN;
    if (i[22] == null) {
      p = 1;
    } else if (i[22] <= 1.35) {
      p = KnockClassifier_12.N480d1354619(i);
    } else if (i[22] > 1.35) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_12.N480d1354619 = function(i) {
    var p = NaN;
    if (i[27] == null) {
      p = 1;
    } else if (i[27] <= 0.12) {
      p = 1;
    } else if (i[27] > 0.12) {
      p = KnockClassifier_12.N527014c0620(i);
    }
    return p;
  };
  KnockClassifier_12.N527014c0620 = function(i) {
    var p = NaN;
    if (i[9] == null) {
      p = 0;
    } else if (i[9] <= 0.4) {
      p = 0;
    } else if (i[9] > 0.4) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_12.N3c627388621 = function(i) {
    var p = NaN;
    if (i[15] == null) {
      p = 0;
    } else if (i[15] <= -0.36) {
      p = 0;
    } else if (i[15] > -0.36) {
      p = 1;
    }
    return p;
  };
  return KnockClassifier_12;
})();
KnockClassifier_12["__class"] = "KnockClassifier_12";
var KnockClassifier_13 = (function() {
  function KnockClassifier_13() {}
  KnockClassifier_13.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_13.N638f04b0622(i);
    return p;
  };
  KnockClassifier_13.N638f04b0622 = function(i) {
    var p = NaN;
    if (i[12] == null) {
      p = 1;
    } else if (i[12] <= 1.58) {
      p = KnockClassifier_13.N427cf1e0623(i);
    } else if (i[12] > 1.58) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_13.N427cf1e0623 = function(i) {
    var p = NaN;
    if (i[15] == null) {
      p = 1;
    } else if (i[15] <= -0.32) {
      p = KnockClassifier_13.N18ebcb3a624(i);
    } else if (i[15] > -0.32) {
      p = KnockClassifier_13.N6417136a630(i);
    }
    return p;
  };
  KnockClassifier_13.N18ebcb3a624 = function(i) {
    var p = NaN;
    if (i[12] == null) {
      p = 1;
    } else if (i[12] <= -1.01) {
      p = KnockClassifier_13.N206b599e625(i);
    } else if (i[12] > -1.01) {
      p = KnockClassifier_13.N3a62766628(i);
    }
    return p;
  };
  KnockClassifier_13.N206b599e625 = function(i) {
    var p = NaN;
    if (i[12] == null) {
      p = 1;
    } else if (i[12] <= -1.36) {
      p = KnockClassifier_13.N67c8a4b2626(i);
    } else if (i[12] > -1.36) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_13.N67c8a4b2626 = function(i) {
    var p = NaN;
    if (i[8] == null) {
      p = 1;
    } else if (i[8] <= -0.76) {
      p = 1;
    } else if (i[8] > -0.76) {
      p = KnockClassifier_13.N25b4d759627(i);
    }
    return p;
  };
  KnockClassifier_13.N25b4d759627 = function(i) {
    var p = NaN;
    if (i[10] == null) {
      p = 0;
    } else if (i[10] <= 0.13) {
      p = 0;
    } else if (i[10] > 0.13) {
      p = 1;
    }
    return p;
  };
  KnockClassifier_13.N3a62766628 = function(i) {
    var p = NaN;
    if (i[22] == null) {
      p = 1;
    } else if (i[22] <= -3.83) {
      p = 1;
    } else if (i[22] > -3.83) {
      p = KnockClassifier_13.N11649b69629(i);
    }
    return p;
  };
  KnockClassifier_13.N11649b69629 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -0.5) {
      p = 1;
    } else if (i[11] > -0.5) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_13.N6417136a630 = function(i) {
    var p = NaN;
    if (i[15] == null) {
      p = 0;
    } else if (i[15] <= -0.03) {
      p = 0;
    } else if (i[15] > -0.03) {
      p = 1;
    }
    return p;
  };
  return KnockClassifier_13;
})();
KnockClassifier_13["__class"] = "KnockClassifier_13";
var KnockClassifier_14 = (function() {
  function KnockClassifier_14() {}
  KnockClassifier_14.classify = function(i) {
    var p = NaN;
    p = KnockClassifier_14.N26fbc77c631(i);
    return p;
  };
  KnockClassifier_14.N26fbc77c631 = function(i) {
    var p = NaN;
    if (i[23] == null) {
      p = 1;
    } else if (i[23] <= -48.09) {
      p = KnockClassifier_14.N5be5b1e2632(i);
    } else if (i[23] > -48.09) {
      p = KnockClassifier_14.N45019b90633(i);
    }
    return p;
  };
  KnockClassifier_14.N5be5b1e2632 = function(i) {
    var p = NaN;
    if (i[12] == null) {
      p = 1;
    } else if (i[12] <= 1.56) {
      p = 1;
    } else if (i[12] > 1.56) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_14.N45019b90633 = function(i) {
    var p = NaN;
    if (i[13] == null) {
      p = 1;
    } else if (i[13] <= -5.5) {
      p = 1;
    } else if (i[13] > -5.5) {
      p = KnockClassifier_14.N6c8c2e54634(i);
    }
    return p;
  };
  KnockClassifier_14.N6c8c2e54634 = function(i) {
    var p = NaN;
    if (i[14] == null) {
      p = 0;
    } else if (i[14] <= 0.43) {
      p = KnockClassifier_14.N6735c478635(i);
    } else if (i[14] > 0.43) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_14.N6735c478635 = function(i) {
    var p = NaN;
    if (i[26] == null) {
      p = 1;
    } else if (i[26] <= -3.7) {
      p = 1;
    } else if (i[26] > -3.7) {
      p = KnockClassifier_14.N7af5d737636(i);
    }
    return p;
  };
  KnockClassifier_14.N7af5d737636 = function(i) {
    var p = NaN;
    if (i[0] == null) {
      p = 0;
    } else if (i[0] <= 25.52) {
      p = KnockClassifier_14.N22049af2637(i);
    } else if (i[0] > 25.52) {
      p = 0;
    }
    return p;
  };
  KnockClassifier_14.N22049af2637 = function(i) {
    var p = NaN;
    if (i[17] == null) {
      p = 1;
    } else if (i[17] <= -3.12) {
      p = 1;
    } else if (i[17] > -3.12) {
      p = KnockClassifier_14.N5c589750638(i);
    }
    return p;
  };
  KnockClassifier_14.N5c589750638 = function(i) {
    var p = NaN;
    if (i[11] == null) {
      p = 1;
    } else if (i[11] <= -0.45) {
      p = 1;
    } else if (i[11] > -0.45) {
      p = 0;
    }
    return p;
  };
  return KnockClassifier_14;
})();
KnockClassifier_14["__class"] = "KnockClassifier_14";
