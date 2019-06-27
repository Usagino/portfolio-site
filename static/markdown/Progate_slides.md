2018年の夏季から、2019年の6月にかけてインターン兼アルバイトで入社していた株式会社Progateでの作品です。

https://prog-8.com/

Progateは初心者向けのプログラミング学習のサービスを配信している会社です。また、私もHTML/CSSやJavaScriptなどを勉強するときProgateから始めました。

Progateのシステムとして、はじめにスライド画像を見てから、実践的にタイピングして学んでいくという手法をとっています。JavaScriptES6やReact、Goなど様々なスライド画像を担当していました。

![01](/markdown/material/Progate_slides/01.png)

![02](/markdown/material/Progate_slides/02.png)

![03](/markdown/material/Progate_slides/03.gif)

Illustratorでイラストを作りaftereffectsを使ってgifを作りました。どう表現したら、サービスのユーザーが使いやすいのかをチームで考えて作りました。

![04](/markdown/material/Progate_slides/04.png)

またスライドの下書きの際に以前までProgateはGoogleが提供しているGoogle slidesを使っていました。しかしそれでは作ってきたスライドを一覧して俯瞰できず、また抽象的すぎて作る際も見直した際も分かりにくいという問題がありました。

![05](/markdown/material/Progate_slides/05.png)

私はこの問題に対し従来使ってきたGoogle slidesではなく、Figmaというオンラインで複数人で同時に編集できるデザインツールの導入を提案しました。

https://www.figma.com/

![06](/markdown/material/Progate_slides/06.png)

![07](/markdown/material/Progate_slides/07.png)

下の画像はイメージですが、スライドごとにコンポーネントを定義してライブラリに登録し各言語のスライドを作る際に呼び出せるようにデザインパターンを構築しました。

これにより、もしProgateのスライドのUIが変わったとしても大元のコンポーネントのデザインを変えるだけで全てが変わるようになりました。柔軟に遠い将来を見据えて私が退社しても運用できるようにとデザインシステムを構築する際に心がけました。