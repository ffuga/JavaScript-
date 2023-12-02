const quiz = [
  {
  	question: '日本で一番有名な自動車メーカーは次の内どれ？',
  	answers: [
  	  	'トヨタ',
  		'日産',
  		'ホンダ',
  		'スバル'
  	],
  	correct: 'トヨタ'
  }, {
  	question: '日本で一番はじめにiPhoneを発売したのは次の内どれ？',
  	answers: [
  	  	'ドコモ',
  		'au',
  		'ソフトバンク',
  		'アマゾン'
  	],
  	correct: 'ソフトバンク'
  }, {
  	question: 'プリウスの駆動方式は次の内どれ？',
  	answers: [
  	  	'FR',
  		'MR',
  		'RR',
  		'FF'
  	],
  	correct: 'FF'
  }
];
const quizLenguth = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズ問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question; 
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
	$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
	buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
	window.alert('正解！');
	score++;
　} else {
	window.alert('不正解！');
　}

  quizIndex++;

  if(quizIndex < quizLenguth){
  	//問題がまだあればこちらを実行
  	setupQuiz();
  } else {
  	//問題がもうなければこちらを実行
  	window.alert('終了！あなたの正解数は' + score + '/' + quizLenguth + 'です！');
  }

};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
	clickHandler(e);
});
  handleIndex++;
}










