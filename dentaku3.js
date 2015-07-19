/**
 * 
 */

$(function () {
	$('#answer').css('text-align','right');
	$('#answer').css('width','125px');
//	$('#ac').css('text-align','center');
	$('#answer').val(0);
	localStorage.setItem('beforeValue',0);
	localStorage.setItem('dotValue',0);
	$('#cul_endFlag').val(0);
});

//データのクリア
function all_clear(){
	$('#answer').css('text-align','right');
	$('#answer').val(0);
	localStorage.setItem('beforeValue',0);
	$('#cul_endFlag').val(0);
	localStorage.setItem('dotValue',0);
}

//1をおした時のアクション
function one_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグを取得する
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加する
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 1;
			}else if(dotValue == 0){
				nowValue = nowValue + 1;
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 1;
			}else if(dotValue == 0){
				nowValue = 1;
			}
		}else if(nowValue != 0){
			if(dotValue == 1){
				nowValue = nowValue + 1;
			}else if(dotValue == 0){
				nowValue = nowValue + 1;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 1;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//2をおした時のアクション
function two_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			//小数点フラグの確認
			if(dotValue == 1){
				nowValue = nowValue + 2;
			}else if(dotValue == 0){
				nowValue = nowValue + 2;
			}
		}else if(nowValue == 0){
			//小数点フラグの確認
			if(dotValue == 1){
				nowValue = nowValue + 2;
			}else if(dotValue == 0){
				nowValue = 2;
			}
		}else if(nowValue != 0){
			//小数点フラグの確認
			if(dotValue == 0){
				nowValue = nowValue + 2;
			}else if(dotValue == 1){
				nowValue = nowValue + 2;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 2;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//3をおした時のアクション
function three_add(){
	//現在数値を取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			//小数点フラグの確認
			if(dotValue == 1){
				nowValue = nowValue + 3;
			}else if(dotValue == 0){
				nowValue = nowValue + 3;
			}
		}else if(nowValue == 0){
			//小数点フラグの確認
			if(dotValue == 1){
				nowValue = nowValue + 3;
			}else if(dotValue == 0){
				nowValue = 3;
			}
		}else if(nowValue != 0){
			//小数点フラグの確認
			if(dotValue == 1){
				nowValue = nowValue + 3;
			}else if(dotValue == 0){
				nowValue = nowValue + 3;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 3;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//4をおした時のアクション
function four_add(){
	//現在数値を取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 4;
			}else if(dotValue == 0){
				nowValue = nowValue + 4;
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 4;
			}else if(dotValue == 0){
				nowValue = 4;
			}
		}else if(nowValue != 0){
			if(dotValue == 0){
				nowValue = nowValue + 4;
			}else if(dotValue == 1){
				nowValue = nowValue + 4;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 4;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//5をおした時のアクション
function five_add(){
	//現在数値を取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			nowValue = nowValue + 5;
		}else if(nowValue == 0){
			nowValue = 5;
		}else if(nowValue != 0){
			nowValue = nowValue + 5;
		}
	}else if(cul_endFlag == 1){
		nowValue = 5;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//6をおした時のアクション
function six_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 6;
			}else if(dotValue == 0){
				nowValue = nowValue + 6;
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 6;
			}else if(dotValue == 0){
				nowValue = 6;
			}
		}else if(nowValue != 0){
			if(dotValue == 1){
				nowValue = nowValue + 6;
			}else if(dotValue == 0){
				nowValue = nowValue + 6;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 6;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//7をおした時のアクション
function seven_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 7
			}else if(dotValue == 0){
				nowValue = nowValue + 7
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 7
			}else if(dotValue == 0){
				nowValue = 7;
			}
		}else if(nowValue != 0){
			if(dotValue == 1){
				nowValue = nowValue + 7
			}else if(dotValue == 0){
				nowValue = nowValue + 7
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 7;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//8をおした時のアクション
function eight_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 8;
			}else if(dotValue == 0){
				nowValue = nowValue + 8;
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 8;
			}else if(dotValue == 0){
				nowValue = 8;
			}
		}else if(nowValue != 0){
			if(dotValue == 1){
				nowValue = nowValue + 8;
			}else if(dotValue == 0){
				nowValue = nowValue + 8;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 8;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//9をおした時のアクション
function nine_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 9;
			}else if(dotValue == 0){
				nowValue = nowValue + 9;
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 9;
			}else if(dotValue == 0){
				nowValue = 9;
			}
		}else if(nowValue != 0){
			if(dotValue == 1){
				nowValue = nowValue + 9;
			}else if(dotValue == 0){
				nowValue = nowValue + 9;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 9;
		$('#cul_endFlag').val(0);
	}
	//データを反映する
	$('#answer').val(nowValue);
}

//0をおした時のアクション
function zero_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//計算済みフラグの取得
	cul_endFlag = $('#cul_endFlag').val();
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//現在数値が入っているかを確認し追加
	if(cul_endFlag == 0){
		if(nowValue.match(/^-?[0-9]+\.[0-9]+$/)){
			if(dotValue == 1){
				nowValue = nowValue + 0;
			}else if(dotValue == 0){
				nowValue = nowValue + 0;
			}
		}else if(nowValue == 0){
			if(dotValue == 1){
				nowValue = nowValue + 0;
			}else if(dotValue == 0){
				nowValue = 0;
			}
		}else if(nowValue != 0){
			if(dotValue == 1){
				nowValue = nowValue + 0;
			}else if(dotValue == 0){
				nowValue = nowValue + 0;
			}
		}
	}else if(cul_endFlag == 1){
		nowValue = 0;
		$('#cul_endFlag').val(0);
	}
	//データの反映
	$('#answer').val(nowValue);
}

//÷ボタンをおした時の処理
function break_cul(){
	//現在の数値を取得
	nowValue = parseFloat($('#answer').val());
	//beforeValueの取得
	beforeValue = parseFloat(localStorage.getItem('beforeValue'));
	//前回値を確認する
	if(beforeValue != 0){
		nowValue = parseFloat(beforeValue / nowValue);
		nowValue = nowValue.toFixed(12);
	}else if(beforeValue = 0){
		alert('0で割ることはできません');
	}
	//LocalStorageに格納
	localStorage.setItem('beforeValue',nowValue);
	//キーボードのキー値
	localStorage.setItem('beforeKey','÷');
	//数値の表示
	$('#answer').val(0);
}

//×ボタンをおした時の処理
function multiply_cul(){
	//現在数値を取得
	nowValue = parseFloat($('#answer').val());
	//beforeValueの取得
	beforeValue = parseFloat(localStorage.getItem('beforeValue'));
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//計算を行う
	if(beforeValue != 0){
		if(dotValue == 0){
			nowValue = parseInt(beforeValue * nowValue);
		}else if(dotValue == 1){
			nowValue = parseFloat(beforeValue * nowValue);
		}
	}
	//localStorageに格納
	localStorage.setItem('beforeValue',nowValue);
	//キーボードのキー値
	localStorage.setItem('beforeKey','✕')
	//表示の初期化
	$('#answer').val(0);
}

//-ボタンをおした時の処理
function minus_cul(){
	//現在数値を取得
	nowValue = parseFloat($('#answer').val());
	//beforeValueの取得
	beforeValue = parseFloat(localStorage.getItem('beforeValue'));
	//
	//計算を行う
	if(beforeValue != 0){
		nowValue = parseFloat(beforeValue - nowValue);
	}else if(beforeValue == 0){
		nowValue = parseFloat(nowValue - beforeValue);
	}
	//localStorageに格納
	localStorage.setItem('beforeValue',nowValue);
	//キーボードのキー値
	localStorage.setItem('beforeKey',"-");
	//表示の初期化
	$('#answer').val(0);
}

//+ボタンをおした時の処理
function plus_cul(){
	//現在数値を取得
	nowValue = parseFloat($('#answer').val());
	//beforeValueの取得
	beforeValue = parseFloat(localStorage.getItem('beforeValue'));
	//計算を行う
	nowValue = parseFloat(beforeValue + nowValue);
	//localStorageへの格納
	localStorage.setItem('beforeValue',nowValue);
	//キーボードのキー値
	localStorage.setItem('beforeKey',"+");
	
	//表示の初期化
	$('#answer').val(0);
}

//小数点ボタンをおした時の処理
function　dot_add(){
	//現在数値の取得
	nowValue = $('#answer').val();
	//小数点フラグの設定
	localStorage.setItem('dotValue',1);
	//beforeValueの取得
	beforeValue = localStorage.getItem('beforeValue');
	//小数点の追加
	nowValue = nowValue + ".";
	//データの反映
	$('#answer').val(nowValue);
	//小数点フラグを立てる
	localStorage.setItem('dotValue',1);
}

//=ボタンをおした時の処理
function goukei(){
	//現在数値の取得
	nowValue = parseFloat($('#answer').val());
	//計算後の数値の取得
	beforeValue = parseFloat(localStorage.getItem('beforeValue'));
	//キーの取得
	nowKey = localStorage.getItem('beforeKey');
	//小数点フラグの取得
	dotValue = localStorage.getItem('dotValue');
	//計算
	if(nowKey == '+'){
		if(dotValue == 0){
			nowValue = parseInt(beforeValue + nowValue);
		}else if(dotValue == 1){
			nowValue = parseFloat(beforeValue + nowValue);
		}
	}else if(nowKey == '-'){
		if(dotValue == 0){
			nowValue = parseInt(beforeValue + nowValue);
		}else if(dotValue == 1){
			nowValue = parseFloat(beforeValue - nowValue);
		}
	}else if(nowKey == '✕'){
		if(dotValue == 0){
			nowValue = parseInt(beforeValue * nowValue);
		}else if(dotValue == 1){
			nowValue = parseFloat(beforeValue * nowValue);
		}
	}else if(nowKey == '÷'){
		nowValue = parseFloat(beforeValue / nowValue);
		nowValue = nowValue.toFixed(12);
	}
	//データの挿入
	$('#answer').val(nowValue);
	//計算後数値領域の初期化
	localStorage.setItem('beforeValue',0);
	//計算終了フラグの入力
	$('#cul_endFlag').val(1);
	
}
