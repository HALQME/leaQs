leaQsはオンライン協調学習支援ツールの表示を最適化するツールです｡  
この拡張機能では**利用者がアクセス可能な**対象ページでのみ、**利用者の閲覧可能な情報**を元に動作し、データの外部送信やローカルへの保存などを行わず、見やすいページを表示する事ができます｡  
本拡張機能の目的は、meaQsのUIを改善し、解答後の学習を促進する事が目的です。  
未回答状態で正答を表示すること、ユーザーの回答を収集することはできません。  

## ダウンロード
```bash
$ git clone https://github.com/HALQME/leaQs.git
```

または  

```bash
$ gh repo clone HALQME/leaQs
```
### Gitとか分からん人向け

開発中の最新版は [https://github.com/HALQME/leaQs/archive/refs/heads/main.zip](https://github.com/HALQME/leaQs/archive/refs/heads/main.zip) をダウンロードすることで確認できます｡  
このバージョンは動作しない、通常よりも動作が重いといった問題に遭遇する可能性があります｡  

[https://github.com/HALQME/leaQs/releases/latest](https://github.com/HALQME/leaQs/releases/latest) からは確実に動作するバージョンが確認できます｡  
Assets > Source Code (zip) をダウンロードしてください｡  
※ 動作することは不具合がない事を保証しません｡

## インストール
現在はGoogle Chromeでのみ動作確認を行っています｡  

1. `chrome://extensions/`にアクセスし、右上の `デベロッパーモード`をオンにします｡
2. 左上の`パッケージ化されていない拡張機能を読み込む`というボタンをクリックする
3. **解凍済みの**leaQsフォルダを選択する

Chrome拡張機能が使用できるブラウザであれば、同様の方法で本拡張機能が読み込めると思います｡

### アップデート
手動アップデートになります｡ `git pull`や再ダウンロードで同じ場所に新しいバージョンを配置した後  
`chrome://extensions/`で`更新`を押す事で最新版に変更できます｡


---
Copyright 2024 @HALQME

Apache License Version 2.0（「本ライセンス」）に基づいてライセンスされます。あなたがこのファイルを使用するためには、本ライセンスに従わなければなりません。本ライセンスのコピーは下記の場所から入手できます。  
[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)  
適用される法律または書面での同意によって命じられない限り、本ライセンスに基づいて頒布されるソフトウェアは、明示黙示を問わず、いかなる保証も条件もなしに「現状のまま」頒布されます。本ライセンスでの権利と制限を規定した文言については、本ライセンスを参照してください。  
