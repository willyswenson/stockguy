import React from "react";
import Card from "./Card";


const Cardmaker = ( data ) => {
    // const [xip, setXip] = useState([]);
    console.log('this worked');
    const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    let zipperFunction = [];
    let stockValFunction = [];
    let stockNameFunction = [];
    var json = data[0]
    console.log(data[0])
    Object.keys(json).forEach(function(key) {
        stockValFunction.push(json[key]);
    });
    for (var key in data[0]) {
        stockNameFunction.push(key);
    }
    zipperFunction = (zip(stockNameFunction, stockValFunction));
    console.log(zipperFunction)
    // setXip(zipperFunction);
    let name1 = 'Current Ratio'
    let cardinfo1 = "liquidity ratio measuring a company’s ability to pay short-term obligations or those due within one year"
    let cardinfo2 = "A high current ratio indicates management might not be utilizing assets in an efficient manner"
    let formula = "FORMULA: total current assets/total current liabilities"

    let name2='Quick Ratio'
    let cardinfo3='Indicator of a company’s short-term liquidity position and measures a company’s ability to meet its short-term obligations with its most liquid assets '
    let cardinfo4='High ratio means better liquidity and financial health; low ratio means more likely for the company to struggle to pay debts'
    let formula2='FORMULA: (cash and cash equivalents + short term investments + account receivables)/total current liabilities'

    let name3='Cash Ratio'
    let cardinfo5 = 'The measure of a company’s liquidity which shows the company’s ability to cover its short-term obligations using only cash and cash equivalents'
    let cardinfo6 = '>1=more cash on hand than current debts ; <1=more short-term debt than cash'
    let formula3 = 'FORMULA: cash and cash equivalents/total current liabilities'


    let name4='Operating Profit Margin'
    let cardinfo7 = 'Metric used to assess a company’s financial health'
    let cardinfo8 = 'Shows the amount of profit made before deducting selling, general, and administrative costs (firm’s net profit margin'
    let formula4 = 'FORMULA: gross profit/revenue'

    let name5 = 'Net Profit Margin'
    let cardinfo9 = 'Measures how much profit is generated as a percentage of revenue'
    let cardinfo10 = 'Helps investors assess if a company’s management is generating enough profit from its sales and whether operating and overhead costs are being covered'
    let formula5 = 'FORUMLA: net income/revenue'

    let name6 = 'Return on Assets'
    let cardinfo11 = 'Indicates how profitable a company is concerning its total assets'
    let cardinfo12 = 'Used to determine how efficient a company is using its assets to generate profit'
    let formula6 = 'FORUMLA: net income/total asset'

    let name7 = 'Return on Equity'
    let cardinfo13 = 'The gauge of corporations profitability and how efficient it is in generating profits'
    let cardinfo14 = 'The higher the ROE, the better a company is at converting its equity finance into profit '
    let formula7 = 'FORUMLA: net income/total stockholder equity'

    let name8 = 'Debt Ratio'
    let cardinfo15 = 'Ratio measuring the extent of a company’s leverage'
    let cardinfo16 = '>1 means considerable amount of a company’s assets are funded by debt, meaning a company has more liabilities than assets; <1 means a greater portion of assets is funded by equity'
    let formula8 = 'FORUMLA: total liabilities/ total assets'

    let name9 = 'Debt to Equity'
    let cardinfo17 = 'A measure of the degree to which a company is financing its operations through debt'
    let cardinfo18 = 'higher leverage ratios means company or stock with higher risk to shareholders but difficult to compare across industries where the ideal amount of debt varies'
    let formula9 = 'FORUMLA: long-term debt/market capitalization'

    let name10 = 'Times Interest Earned Ratio'
    let cardinfo19 = 'Debt and profitability ratio used to determine how easily a company can pay interest on outstanding debt'
    let cardinfo20 = 'Used to assess risk of a company based off its current debt or for future borrowing; A higher cover ratio good but ideal ratios vary by industry'
    let formula10 = 'FORUMLA: EBIT/interest expense; EBIT = earnings before interest and taxes'

    let name11 = 'Receivables Turnover'
    let cardinfo21 = 'Measures how well a company uses and manages the credit it extends to customers and how quickly that short-term debt is collected or is paid'
    let cardinfo22 = 'Efficient company has a higher ratio; inefficient company has a lower ratio'
    let formula11 = 'FORUMLA: revenue/account receivables'

    let name12 = 'Assert Turnover'
    let cardinfo23 = 'Measures value of a company’s sales or revenues relative to the value of its assets'
    let cardinfo24 = 'Can be used as an indicator of efficiency at which a company is using its assets to generate revenue'
    let formula12 = 'FORUMLA: revenue/total assets'

    let name13 = 'Free Cash Flow per Share'
    let cardinfo25 = 'Financial solvency ratio comparing the free cash flow per share a company is expected to earn against its market value per share'
    let cardinfo26 = 'low ratio, less attractive an investment; high ratio means generation of enough cash to fulfill debt and other obligations such as dividend payouts'
    let formula13 = 'FORUMLA: free cash flow per share/market price per share'

    let name14 = 'Payout Ratio'
    let cardinfo27 = 'Shows the proportion of earnings a company pays its shareholders in the form of dividends'
    let cardinfo28 = 'Payout ratios over 1 means a company is paying out more in dividends than its earnings can support which some view as unsustainable'
    let formula14 = 'FORUMLA: dividend paid/net income'

    let name15= 'Dividend Payout Ratio'
    let cardinfo29 = 'Financial ratio showing how much a company pays out in dividends each year relative to its stock price'
    let cardinfo30 = 'higher dividend yields do not always mean it is a good investment as the dividend yield of a stock may be elevated as a result of the declining stock price'
    let formula15 = 'FORUMLA: (dividend paid / share number)/(net income)'

    let name16 = 'Price to Book Ratio'
    let cardinfo31 = 'Measures the market’s valuation of a company relative to its book value'
    let cardinfo32 = 'Ratios under 1 are typically considered good investments'
    let formula16 = 'FORUMLA: (price) / (total stockholder equity/ # shares)'

  return (
    <>
    <p>
      {Card(name1, stockValFunction[3], cardinfo1, cardinfo2, formula, name2, stockValFunction[4], cardinfo3, cardinfo4, formula2)}
    </p>
    <p>
      {Card(name3, stockValFunction[5], cardinfo5, cardinfo6, formula3, name4, stockValFunction[11], cardinfo7, cardinfo8, formula4)}
    </p>
    <p>
      {Card(name5, stockValFunction[14], cardinfo9, cardinfo10, formula5, name6, stockValFunction[16], cardinfo11, cardinfo12, formula6)}
    </p>
    <p>
      {Card(name7, stockValFunction[17], cardinfo13, cardinfo14, formula7, name8, stockValFunction[22], cardinfo15, cardinfo16, formula8)}
    </p>
    <p>
      {Card(name9, stockValFunction[23], cardinfo17, cardinfo18, formula9, name10, stockValFunction[26], cardinfo19, cardinfo20, formula10)}
    </p>
    <p>
      {Card(name11, stockValFunction[29], cardinfo21, cardinfo22, formula11, name12, stockValFunction[33], cardinfo23, cardinfo24, formula12)}
    </p>
    <p>
      {Card(name13, stockValFunction[35], cardinfo25, cardinfo26, formula13, name14, stockValFunction[37], cardinfo27, cardinfo28, formula14)}
    </p>
    <p>
      {Card(name15, stockValFunction[44], cardinfo29, cardinfo30, formula15, name16, stockValFunction[46], cardinfo31, cardinfo32, formula16)}
    </p>


    </>
  )
}

export default Cardmaker