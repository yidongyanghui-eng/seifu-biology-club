# 清風高校 生物部 - 公式紹介サイト

高校の生物部を紹介する、レスポンシブなWebサイトです。HTML、CSS、JavaScriptだけで動作し、GitHub Pagesで公開できます。

## 🌿 サイト機能

### ページ構成
- **トップページ** - 生物部の紹介
- **生物部について** - 部の歴史、活動日、部員数、活動内容
- **部室案内** - 室内外の生き物や植物の紹介
- **写真ギャラリー** - 活動の様子
- **清風高校について** - 公式サイトへのリンク

### デザイン特徴
- 🎨 自然・水・緑をイメージした緑青系カラー
- 📱 スマートフォン・タブレット・PCすべてに対応したレスポンシブデザイン
- ✨ スクロール時のフェードイン・スライドアニメーション
- 🖼️ 画像クリックで拡大表示するモーダル機能
- 🎯 カード型レイアウト
- ♿ 視認性の高い配色と文字サイズ

## 📁 ファイル構成

```
seifu-biology-club/
├── index.html                    # メインページ
├── styles/
│   └── main.css                  # スタイルシート
├── scripts/
│   └── main.js                   # JavaScriptファイル
├── images/                       # 画像フォルダ（プレースホルダー用）
│   ├── hero-placeholder.jpg
│   ├── fish-placeholder.jpg
│   ├── aquatic-plants-placeholder.jpg
│   ├── other-creatures-placeholder.jpg
│   ├── outdoor-plants-placeholder.jpg
│   ├── outdoor-animals-placeholder.jpg
│   ├── activity-1-placeholder.jpg
│   ├── activity-2-placeholder.jpg
│   ├── activity-3-placeholder.jpg
│   └── activity-4-placeholder.jpg
├── README.md                     # このファイル
└── .gitignore                    # Git無視ファイル
```

## 🚀 使用方法

### 1. リポジトリのクローン
```bash
git clone https://github.com/yidongyanghui-eng/seifu-biology-club.git
cd seifu-biology-club
```

### 2. ローカルで確認
ブラウザで `index.html` を開くか、ローカルサーバーで実行：
```bash
# Python 3.x の場合
python -m http.server 8000

# Python 2.x の場合
python -m SimpleHTTPServer 8000

# Node.js の場合
npx http-server
```

その後、ブラウザで `http://localhost:8000` にアクセス

### 3. GitHub Pages で公開

1. このリポジトリのSettings → Pages に移動
2. Source を `main` ブランチに設定
3. 数分待つと、以下のURLでサイトが公開されます：
   ```
   https://yidongyanghui-eng.github.io/seifu-biology-club/
   ```

## ✏️ サイトをカスタマイズする方法

### 写真を追加する

1. **`images/` フォルダに画像を追加**
   - JPG、PNG、WebP形式に対応
   - 推奨サイズ：1200×800px以上

2. **`index.html` を編集**

部室案内の魚の写真を追加する例：
```html
<div class="gallery-card fade-in-on-scroll">
    <img src="images/fish-placeholder.jpg" alt="水槽の魚" 
         class="gallery-image" data-full="images/fish-placeholder.jpg">
    <div class="card-content">
        <h5>メダカ</h5>
        <p>部室で飼育しているメダカです。</p>
    </div>
</div>
```

ギャラリーにカードを追加する例：
```html
<div class="gallery-card fade-in-on-scroll">
    <img src="images/your-photo.jpg" alt="写真の説明" 
         class="gallery-image" data-full="images/your-photo.jpg">
    <div class="card-content">
        <h5>写真のタイトル</h5>
        <p>写真の説明文</p>
    </div>
</div>
```

### テキストを編集する

`index.html` をテキストエディタで開いて、直接編集：

- 生物部の活動内容を編集
- 部員の説明を更新
- 新しいセクションを追加

### 色を変更する

`styles/main.css` の上部の色定義を変更：

```css
:root {
    --primary-color: #2d7a6f;      /* メインカラー（緑） */
    --secondary-color: #4ca6a0;    /* サブカラー（青緑） */
    --accent-color: #a8d5d0;       /* アクセントカラー（薄い青） */
    --dark-blue: #1a5e5a;          /* ダークカラー */
    --light-bg: #f0faf9;           /* 背景色 */
}
```

## 📋 各セクションのカスタマイズ詳細

### 生物部について
`<section id="about">` セクション内の `.about-card` を編集

- 部の歴史
- 活動日の説明
- 部員数の統計

### 部室案内
`<section id="room-guide">` セクション内のギャラリーカードを追加・編集

- **室内の生き物**：水槽、水草、その他
- **室外の自然**：植物、動物

### 写真ギャラリー
`<section id="gallery">` セクションに新しいカードを追加

### 清風高校について
`<section id="school">` セクションで公式サイトのリンクを確認・編集

## 🎨 デザイン・カラーパレット

| 用途 | 色コード | 説明 |
|------|---------|------|
| メインカラー | #2d7a6f | 深い緑（ヘッダー背景など） |
| サブカラー | #4ca6a0 | 青緑（ボタンなど） |
| アクセント | #a8d5d0 | 薄い青緑（強調部分） |
| ダーク | #1a5e5a | 深い青緑（フッター） |
| 背景 | #f0faf9 | 薄い緑（セクション背景） |

## 📱 レスポンシブ対応

- **PC版**：フルレイアウト（1200px以上）
- **タブレット版**：2列グリッド（768px〜1199px）
- **スマートフォン版**：1列レイアウト（479px以下）

モバイルメニューは768px以下で自動的に表示されます。

## ✨ アニメーション機能

- **フェードイン**：スクロール時にカードが段階的に表示
- **スライド**：About セクション��カードが左右から移動
- **ホバー効果**：カードにマウスを乗せると浮き上がり
- **画像拡大**：画像クリックでモーダルで拡大表示

## 🛠️ 技術仕様

- **HTML5** - セマンティックマークアップ
- **CSS3** - グリッドレイアウト、フレックスボックス、アニメーション
- **JavaScript** - Intersection Observer API、イベントリスナー
- **互換性** - 最新ブラウザ（Chrome、Firefox、Safari、Edge）対応

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 👥 コントリビューション

部員による情報更新やコンテンツ追加を歓迎します！

1. ファイルを編集
2. 変更をコミット
3. プルリクエストを送信

## 📞 サポート

質問や不具合報告は GitHub Issues で お願いします。

---

**作成日**：2024年9月
**最終更新**：2024年9月
**公式サイト**：https://github.com/yidongyanghui-eng/seifu-biology-club
