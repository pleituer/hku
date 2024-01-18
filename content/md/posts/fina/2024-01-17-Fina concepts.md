{:title "Finance concepts"
 :layout :post
 :tags ["Study"]
 :toc true}

## Bonds

<div class="katex-container">

$A$ (<i style="color:Gold">bondholder</i>) buys a bond from $B$ (<i style="color:Gold">bond issuer</i>) at a <i style="color:Gold">price</i>, which is always fluctuating. After a set time, the <i style="color:Gold">maturity</i>, $T$, $B$ will pay back $A$ a set amount, the <i style="color:Gold">face value</i>, $F$. Before maturiy, $B$ may pay $A$ annually or semi-annually some percentage of the face value, and the percentage is the <i style="color:Gold">coupon rate</i>, which can be 0 for short bonds. 

</div>

<div class="katex-container">

$A$ may make some money off the transaction, assuming <span style="color:LimeGreen">the coupon rate is 0</span>, let the price of the bond to be $B(T)$ (remember price is not fixed, but constantly fluctuating), then the <i style="color:Gold">interest rate</i> or <i style="color:Gold">yield</i>, denoted as $r_T$, satisfies $$B(T)e^{r_TT} = F,$$ implying $$r_T = -\frac{1}{T} \ln \frac{B(T)}{F}.$$ The yield depends on the maturity and is know as a <i style="color:Gold">yield curve</i>.

The yield/interest rate $r_T$ just now is know as a <i style="color:Gold">continuously compounded</i> interest rate, there are also interest that are <i style="color:Gold">discretely compounded</i>. Moreover, when interest is compounded continuously, the interest rate $r_C$ is known as the annual rate, and if interest is compounded discretely, and say the unit time is $h$ years, then the <i style="color:Gold">one-step interest rate</i> $r = e^{r_C h} - 1$.

</div>

## Forwards

<div class="katex-container">

Say $A$ (<i style="color:Gold">buyer</i>) buys a forward contract from $B$ (<i style="color:Gold">seller</i>), with <i style="color:Gold">maturity</i> $T$ and <i style="color:Gold">strike</i> $K$, then after time $T$, $A$ will legally have to buy one stock of $B$'s at price $K$, regardless of the price of the stock at that time. <i style="color:Gold">Forward price</i>, $F$, also has a similar definition, when the buyer is obligated to buy a stock for the price $F$ and the seller must sell a stock for price $F$ when maturity $T$ is achieved. However, it must be emphasized the difference between forward price and strike, the latter, depending on the value of $K$, may incure some <b style="color:HotPink">initial settlement fee</b>, while for the former, forward prices, <b style="color:HotPink">no inital settlement fee</b> is required. In other words, $F$ is just $K$ when no intial settlement fee is achieved. And the inital settlement fee is always paid when the buyer buys the contract.

</div>

### Futures

<div class="katex-container">

Future contracts are very similar to Forwards, but a key difference is futures can be changed daily, that is, the buyer (and the same for the seller), can sell their positions to other people, and <b style="color:HotPink">enter and exit the contract</b>, making futures highly liquid. Moreover, a settlement of the future contracts can occur over a range of dates, instead of just the singular time as in forwards, though typically within a given month.

## Options

Intuitively, options are like insurance, both sides agree to yet another forwards contract, and the owner of the option would then be gaurenteed not to loose money. For example if $A$ gives $B$ some money so that if the stock at maturity is lower than some threshold, $A$ would not buy the stock by maturity. This acts as an insurance for $A$ so he won't loose money over the original forwards contract. Similarly, the seller of the original contract can also do the same. 

</div>

