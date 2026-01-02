# 🌻 SFL Coin Converter (SFLCC)

A real-time economy tool for the web3 game **[Sunflower Land](https://sunflower-land.com/)**. This dashboard helps players optimize their farming strategy by comparing P2P market prices with in-game shop (NPC) prices to calculate the most profitable items to trade.

> **[Live Demo](https://kanzuki-l.github.io/SFLCC/)**

## ✨ Features

* **📊 Real-Time Market Data:** Fetches the latest P2P prices to ensure accurate calculations.
* **💰 Profitability Calculator:** Automatically calculates the **"Coins per 1 FLOWER"** ratio, highlighting the best deals in green and poor deals in red.
* **🌍 Multi-Language Support:** Fully localized interface available in:
* English
* 中文 (Chinese)
* Bahasa Melayu (Malay)



* **⚡ Smart Filtering & Sorting:** Filter by category (Crops, Fruits, Greenhouse) and sort by name, price, or profitability ratio.
* **🛠 Custom Scenarios:**
* Toggle **Green Thumb (+5%)** and **Coin Swindler (+10%)** bonuses.
* Manually input custom P2P prices to simulate market shifts.


* **📱 Responsive Design:** Optimized for both desktop and mobile views.

## 🚀 How to Use

1. **Sync Data:** Click the `Sync Data` button to fetch the latest prices from the API and game data.
2. **Select Bonuses:** Check the boxes for "+5%" or "+10%" if you have the corresponding in-game bonuses or NFTs.
3. **Analyze:** Look at the **"Coins per 1 FLOWER"** column. Higher numbers indicate better value for your resources.
* <span style="color:green">**Green:**</span> High profitability (Ratio > 320).
* <span style="color:red">**Red:**</span> Low profitability.

4. **Custom Input:** You can click on the "P2P Price" cell for any item to manually override the price and see how it affects the ratio.

## 📂 Project Structure

* `index.html`: Main entry point.
* `js/`: Contains the application logic.
* `app.js`: Main controller.
* `services/`: Handles Networking, Parsing, I18n, and Analytics.
* `core/`: Core calculation logic.
* `view/`: DOM manipulation and UI rendering.
* `config/`: Language translation files.

* `css/`: Custom styling variables and responsive rules.

## 🙏 Acknowledgements & Credits

This project would not be possible without the amazing tools and data provided by the community.

### 🌟 Special Thanks to SFL.World

A huge thank you to **[SFL.World](https://sfl.world/)** for providing the **Pricing API** and image assets used in this tool. Their reliable data feed makes the real-time calculations possible.

### Sunflower Land

* Game assets and base price data are sourced from the official [Sunflower Land GitHub repository](https://github.com/sunflower-land/sunflower-land).

---

*Disclaimer: This is a fan-made tool and is not officially affiliated with Sunflower Land.*
