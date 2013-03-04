<?php

class Worker extends CI_Model {
	private $ageArr = array(0, 6, 18, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 90);
	
	public function renderCountries() {
		$query = $this->db->query("SELECT * FROM countries");
		$rows = $query->result();
	
		$select = '<select name="country" id="qcountry">';
		$select .= "<option value=0>----- Select a country -----</option>";
		foreach ($rows as $row) {
			$select .= "<option value='".$row->iso."'>".$row->printable_name."</option>";
		}
		$select .= '</select>';
		return $select;
	}
	
	public function insertQuoteToDB($row) {
		return $this->db->insert("quotes", $row);
	}
	
	public function calculateTotal($birthday, $plan, $zone, $option) {
		$ageH_Z1 = array(
			array(9934,		11648,	17222,	0),
			array(8757,		10190,	15158,	0),
			array(7450,		10190,	15531,	28228),
			array(8104,		11520,	17350,	33254),
			array(9282,		12733,	20009,	35913),
			array(12022,	16616,	21467,	35446),
			array(15018,	20382,	26445,	40425),
			array(19729,	25594,	31167,	0),
			array(25209,	32869,	38082,	0),
			array(32392,	42571,	48995,	0),
			array(43492,	56516,	70822,	0),
			array(60341,	77982,	104415,	0),
			array(99518,	126243,	169164,	0),
			array(99518,	126243,	169164,	0)
		);
		$ageH_Z2 = array(
			array(8077,		8936,	13229,	0),
			array(7123,		7833,	11575,	0),
			array(5936,		7717,	11798,	23341),
			array(6530,		8713,	13229,	27687),
			array(7600,		9710,	15222,	29680),
			array(9741,		12678,	16324,	29033),
			array(12232,	15550,	20182,	32891),
			array(16027,	19515,	23702,	0),
			array(20543,	25143,	29108,	0),
			array(26362,	32637,	37482,	0),
			array(35616,	43545,	54569,	0),
			array(49513,	59975,	80369,	0),
			array(81684,	97234,	130200,	0),
			array(81684,	97234,	130200,	0)
		);
		$ageH_Z3 = array(
			array(10837,	12707,	18787,	0),
			array(9553,		11117,	16536,	0),
			array(8128,		11117,	16943,	30794),
			array(8840,		12568,	18928,	36277),
			array(10126,	13890,	21828,	39178),
			array(13115,	18126,	23418,	38669),
			array(16384,	22235,	28849,	44100),
			array(21522,	27920,	34001,	0),
			array(27500,	35857,	41544,	0),
			array(35336,	46441,	53449,	0),
			array(47446,	61654,	77261,	0),
			array(65826,	85072,	113908,	0),
			array(108565,	137719,	184542,	0),
			array(108565,	137719,	184542,	0)
		);
		$ageH_Z4 = array(
			array(9031,	10589,	15656,	0),
			array(7961,	9264,	13780,	0),
			array(6773,	9264,	14119,	25662),
			array(7367,	10473,	15773,	30231),
			array(8438,	11575,	18190,	32648),
			array(10929,	15105,	19515,	32224),
			array(13653,	18529,	24041,	36750),
			array(17935,	23267,	28334,	0),
			array(22917,	29881,	34620,	0),
			array(29447,	38701,	44541,	0),
			array(39538,	51378,	64384,	0),
			array(54855,	70893,	94923,	0),
			array(90471,	114766,	153785,	0),
			array(90471,	114766,	153785,	0)
		);
		$ageH = array($ageH_Z1, $ageH_Z2, $ageH_Z3, $ageH_Z4);
		
		$ageO_Z1 = array(
			array(19072,	27467,	15893,	24288),
			array(17028,	25423,	14190,	22585),
			array(12663,	21058,	10552,	18947),
			array(14117,	22512,	11765,	20160),
			array(15139,	23534,	12616,	21011),
			array(18917,	27312,	15764,	24159),
			array(21393,	29788,	17828,	26223),
			array(25913,	34308,	21594,	29989),
			array(27942,	36337,	23285,	31680),
			array(34491,	42886,	28742,	37137),
			array(45838,	54233,	38199,	46594),
			array(56752,	65147,	47293,	55688),
			array(85855,	94250,	71546,	79941),
			array(85855,	94250,	71546,	79941)
		);
		$ageO_Z2 = array(
			array(14819,	22451,	12349,	19981),
			array(12974,	20606,	10812,	18444),
			array(10328,	17960,	8607,	16239),
			array(11652,	19284,	9710,	17342),
			array(12313,	19945,	10261,	17893),
			array(15480,	23112,	12900,	20532),
			array(17465,	25097,	14554,	22186),
			array(21166,	28798,	17638,	25270),
			array(22896,	30528,	19080,	26712),
			array(28315,	35947,	23596,	31228),
			array(37842,	45474,	31535,	39167),
			array(46962,	54594,	39135,	46767),
			array(70914,	78546,	59095,	66727),
			array(70914,	78546,	59095,	66727)
		);
		$ageO_Z3 = array(
			array(20805,	29963,	17338,	26496),
			array(18576,	27734,	15480,	24638),
			array(13814,	22972,	11512,	20670),
			array(15401,	24559,	12834,	21992),
			array(16515,	25673,	13763,	22921),
			array(20637,	29795,	17197,	26355),
			array(23338,	32496,	19448,	28606),
			array(28269,	37427,	23557,	32715),
			array(30482,	39640,	25402,	34560),
			array(37626,	46784,	31355,	40513),
			array(50005,	59163,	41671,	50829),
			array(61911,	71069,	51593,	60751),
			array(93660,	102818,	78050,	87208),
			array(93660,	102818,	78050,	87208)
		);
		$ageO_Z4 = array(
			array(17338,	24970,	14448,	22080),
			array(15480,	23112,	12900,	20532),
			array(11512,	19144,	9593,	17225),
			array(12834,	20466,	10695,	18327),
			array(13763,	21395,	11469,	19101),
			array(17197,	24829,	14331,	21963),
			array(19448,	27080,	16207,	23839),
			array(23557,	31189,	19631,	27263),
			array(25402,	33034,	21168,	28800),
			array(31355,	38987,	26129,	33761),
			array(41671,	49303,	34726,	42358),
			array(51593,	59225,	42994,	50626),
			array(78050,	85682,	65042,	72674),
			array(78050,	85682,	65042,	72674)
		);
		$ageO = array($ageO_Z1, $ageO_Z2, $ageO_Z3, $ageO_Z4);
		//var_dump($ageH[0][0][1]);
	
		$result['basic'] = 0;
		$result['option'] = 0;
		
		//var_dump($birthday);
		//var_dump($plan);
		//var_dump($zone);
		//var_dump($option);
		$age = $this->getAgeFromDOB($birthday);
		$ageIndex = $this->getAgeIndex($age);
		
		$basicPrice = $ageH[$zone][$ageIndex][$plan];
		$optionPrice = 0;
		if(!$option){
			$optionPrice = 0;
		}else {
			$optionPrice = $ageO[$zone][$ageIndex][$option];
		}
		//var_dump($basicPrice);
		//var_dump($optionPrice);
		$result['basic'] = $basicPrice;
		$result['option'] = $optionPrice;
		
		return $result;
	}
	
	function getAgeFromDOB($birthday) {
		// Put the year, month and day in separate variables
        list($Day, $Month, $Year) = explode("-", $birthday);
 
        $YearDiff = date("Y") - $Year;
		
		$monthInt = intval($Month);
		$dayInt = intval($Day);
		$currMonthInt = intval(date("m"));
		$currDayInt = intval(date("d"));
		/*
		var_dump($monthInt);
		var_dump($dayInt);
		var_dump($currMonthInt);
		var_dump($currDayInt);
		die('');
		*/
 
        // If the birthday hasn't arrived yet this year, the person is one year younger
        if($currMonthInt < $monthInt || ($currMonthInt == $monthInt && $currDayInt < $dayInt)){
            $YearDiff--;
        }
        return $YearDiff;
	}
	
	function getAgeIndex($age) {
		$index = 0;
		foreach($this->ageArr as $i=>$value){
			if($value <= $age)
				$index = $i;
		}
		return $index;
	}
}