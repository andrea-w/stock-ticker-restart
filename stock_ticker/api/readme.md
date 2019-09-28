# Stock Ticker API Readme

## Schemas

### Player Class

+ username: String. Required
+ isBroker: Boolean. Default: false
+ tradeHistory: array of trades
+ portfolio: Portfolio
+ currentGame: reference to Game object

### Portfolio Class

+ cash: Number. Required. Default = 0
+ bonds: Number. Required. Default = 0
+ industrials: Number. Required. Default = 0
+ silver: Number. Required. Default = 0
+ gold: Number. Required. Default = 0
+ oil: Number. Required. Default = 0
+ grain: Number. Required. Default = 0
+ netWorth: Number. Required. Default = 0. Sum of all previous entries

### Trade Class

+ username: String. Required. Identifies player involved in trade
+ time: Date. Default = Date.now
+ stockName: String. Required
+ stockQuantity: Number. Required
+ stockPriceAtTrade: Number. Required
+ isPurchase: Boolean. Indicates whether trade is purchase or sale
+ tradeAmount: Number. Required

### Game Class

+ gameName: String. Required
+ startTime: Date. Default = Date.now
+ endTime: Date.
+ timeRemaining: Date
+ players: Array of Players
+ broker: reference to 1 Player object
+ digitalDice: Boolean. Default = false
+ stockPrices: Dictionary
    - oil: Number. Default = 100
    - grain: Number. Default = 100
    - gold: Number. Default = 100
    - silver: Number. Default = 100
    - bonds: Number. Default = 100
    - industrials: Number. Default = 100

## Relations

+ 1-to-1 mapping between Player and Portfolio
+ many-to-1 Trades to Player. Trades stored in Player's tradeHistory array
+ many-to-1 Players to Game. Player can be in maximum of 1 Game at a time