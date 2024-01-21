{:title "Finance concepts"
 :layout :post
 :tags ["Study"]
 :toc true}

## Bonds

<div class="katex-container">

$A$ (<i style="color:Gold">bondholder</i>) buys a bond from $B$ (<i style="color:Gold">bond issuer</i>) at a <i style="color:Gold">price</i>, which is always fluctuating. After a set time, the <i style="color:Gold">maturity</i>, $T$, $B$ will pay back $A$ a set amount, the <i style="color:Gold">face value</i>, $F$. Before maturiy, $B$ may pay $A$ annually or semi-annually some percentage of the face value, and the percentage is the <i style="color:Gold">coupon rate</i>, which can be 0 for short bonds. 


</div>

<div class="katex-container">


$A$ may make some money off the transaction, assuming <span style="color:LimeGreen">the coupon rate is 0</span>, let the price of the bond to be $B(T)$ (remember price is not fixed, but constantly fluctuating), then the <i style="color:Gold">interest rate</i> or <i style="color:Gold">yield</i>, denoted as $r_T$, satisfies $$B(T)e\^{r_TT} = F,$$ implying $$r_T = -\frac{1}{T} \ln \frac{B(T)}{F}.$$ The yield depends on the maturity and is know as a <i style="color:Gold">yield curve</i>.

The yield/interest rate $r_T$ just now is know as a <i style="color:Gold">continuously compounded</i> interest rate, there are also interest that are <i style="color:Gold">discretely compounded</i>. Moreover, when interest is compounded continuously, the interest rate $r_C$ is known as the annual rate, and if interest is compounded discretely, and say the unit time is $h$ years, then the <i style="color:Gold">one-step interest rate</i> $r = e\^{r_C h} - 1$.

## Forwards

Say $A$ (<i style="color:Gold">buyer</i>) buys a forward contract from $B$ (<i style="color:Gold">seller</i>), with <i style="color:Gold">maturity</i> $T$ and <i style="color:Gold">strike</i> $K$, then after time $T$, $A$ will legally have to buy one stock of $B$'s at price $K$, regardless of the price of the stock at that time. <i style="color:Gold">Forward price</i>, $F$, also has a similar definition, when the buyer is obligated to buy a stock for the price $F$ and the seller must sell a stock for price $F$ when maturity $T$ is achieved. However, it must be emphasized the difference between forward price and strike, the latter, depending on the value of $K$, may incure some <b style="color:HotPink">initial settlement fee</b>, while for the former, forward prices, <b style="color:HotPink">no inital settlement fee</b> is required. In other words, $F$ is just $K$ when no intial settlement fee is achieved. And the inital settlement fee is always paid when the buyer buys the contract.





### Futures

Futures contracts are very similar to Forwards, but a key difference is futures can be changed daily, that is, the buyer (and the same for the seller), can sell their positions to other people, and <b style="color:HotPink">enter and exit the contract</b>, making futures highly liquid. Moreover, a settlement of the futures contracts can occur over a range of dates, instead of just the singular time as in forwards, though typically within a given month.

## Options

Intuitively, options are like insurance, both sides agree to yet another forwards contract, and the owner of the option would then be gaurenteed not to loose money. For example if $A$ gives $B$ some money so that if the stock at maturity is lower than some threshold, $A$ would not buy the stock by maturity. This acts as an insurance for $A$ so he won't loose money over the original forwards contract. Similarly, the seller of the original contract can also do the same. Moreover, options are usually written on a particular stock, know as the <i style="color:Gold">underlying</i>. 




In addition, the option is called a <i style="color:Gold">call option</i> if the option is obtained by the buyer and <i style="color:Gold">put option</i>. Say the futures random value of the stock is $S_T$, then the pay-off for a call option is $(S_T-K)\^+$ and it is $(K-S_T)\^+$ for a put option, where $(a)\^+ := \max \{a, 0\}$.


### Call-Put Parity


Starting from an identity that states $$(S_T-K)\^+ - (K-S_T)\^+ = S_T - K.$$ We note that $C(K, T) - P(K, T) = (S_T-K)\^+ - (K-S_T)\^+$, where $C(K, T)$ is the price of the call option with strike $K$ maturity $T$, similarly, $P(K, T)$ is the price of the put option. Now we note that the right hand side is the payoff of the forward contract, and just considering present-day prices $S_0$, we can rewrite RHS to be $S_0 - KB(T)$, where $B(T)$ is the price of a zero-coupon bond. Thus we get the <i style="color:Gold">Call-Put Parity</i> $$C(K, T) - P(K, T) = S_0 - KB(T).$$


### Contingent Claims



These are also known as <i style="color:Gold">deritatives</i>, and depends on other stocks or assets. The payoff of the contingent claims are specified in the financial contract, with the payoff function $$\Phi: \text{Stock paths} \to \mathbb{R},$$ so the financial contract will pay $\Phi((S_t)_{t \in [0, T]})$ where $(S_t)_{t \in [0, T]}$ is the futures random values of the stock. 

<b style="color:HotPink">Important:</b> These are mostly applicable to European only, as in America, options can be settled <b style="color:HotPink">before</b> maturity, while European options are settled <b style="color:HotPink">at</b> maturity. So for example, the American put option would pay $(K - S_{\tau})\^+$ instead of $(K - S_T)\^+$, where $\tau \in [0, T]$ is a random time chosen by the holder of the put option. 



## Pricing

<b>Assumptions:</b> 
- any combination of the assets are liquidly traded
- prices of these intruments are 0
- no costs in trading and transactions
- no friction
- any financial instruments can be bought and sold for the same price
- we can always find a party to trade with
- transactions are done instantly

We first define <i style="color:Gold">arbitrage</i>, which is when some linear combination of assests has an initial price not more than 0, but has a non-negative cash flow in the futures that is not constantly 0. Note that in efficient markets, everything is in equilibrium, that is, there are no arbitrage. Which yields the <i style="color:Gold">arbitrage pricing rule</i>, which states that everything is priced in a way that the market is free of arbitrage, and this rule is quite helpful in the determination of prices. 

### Law of One Price

This theorem stems from the assumption of no arbitrage, and states that 2 contracts with the same cash flow must have the same price. 

#### Proof
Assume not, then we can simply sell the expensive one and buy the cheaper one, thus making a positive amount. Furthermore, the future cash flow will be 0, as the cash flow from the 2 contracts cancel out. Hence we have create an arbitrage, which contradicts with our assumption of the market.

### Short Sales


Short sales are like borrowing money, but instead of borrowing actual money, we borrow assets or other products, like borrowing some amount of stocks. This may have limitations in the real world, like the banning of short sales in some countries, or the requirement to place some amount first. But we shall ignore such frictions and work with the idealized market. 


### Forward Price


We can use the Law of One Price to show that the price of the forward contract is the payoff of the forward contract, $S_T - K$, which is equivalent to $S_0 - K$, and thus $S_0 - KB(T)$, as in the [Call-Put Parity](#call-put-parity). Moreover, we can calculate the forward price $F$, as in the [definition](#forwards), $K=F$ is achieved when the price of the forward contract is 0. Hence $0 = S_0 - FB(T)$, solving gives $F = \frac{S_0}{B(T)}$.


### Futures Price


Everyday, the price of a futures contract may fluctuate, denoting it by $F_k$ (for each share) at day $k$, the holder of the long position, the buyer, will have to pay the seller $M(F_k - F_{k-1})$ at day $k$, where $M$ is the number of shares required to buy at maturity. This is done to promote liquididty and reduce risks. And at settlement, the long position holder will have to buy the $M$ shares with a total price of $MF_T = MS_T$. 



Furthermore, every futures contract will specify a <i style="color:Gold">margin</i> that must be paied into the <i style="color:Gold">margin account</i>. This ensures that the position is always secure, and obligatory payments or deposits are made onto this account. There is also a maintenance value for the margin, if the margin drops below the maintenance value, a <i style="color:Gold">margin call</i> is triggered, and the investors have to provide additional funds to keep the margin above the maintenance value. Also, investers are entitled to withdraw any positive difference of the margin and the intial margin. 



Margin balance fluctuates with the contract price, more specifically, $$M_k = M_{k-1} - M(F_k - F_{k-1})+\text{any additional payments made in the account.}$$ Where $M_k$ is the margin balance at day $k$. 


### Forward Price = Futures Price


Assuming constant interest rate $r$, given a forward and futures contract with the same maturity $T$, then the futures contract price $F_0 = F = \frac{S_0}{B(T)}$. 


#### Proof


We shall use the Law of One Peice to prive it. Consider 2 scenarios, and let $T = n$.



Scenario 1: With a forward contract, investing $F$ dollars and holding $(1+r)\^n$ many long positions.It is easy to see that the value of the forward contract will be the bond investement + the payoff, i.e. $(1+r)\^n F + (1+r)\^n (S_n - F) = (1+r)\^n S_n$. 



Scenario 2: With a futures contract, investing $F_0$ dollars and buying $\pi_0 = 1+r$ many futures contract with maturity $n$.And each day we shall invest or borrow for the adjustment with interest rate $r$. We shall also increase our futures shares by an addition factor of $1+r$. Leading to:


|Day $k$ |Futures Held $\pi_k$  |Payment made            |Value at maturity|
|--------|----------------------|------------------------|-----------------|
|0       |$\pi_0 = 1 + r$       |0                       |0                |
|1       |$\pi_1 = (1+r)\^2$    |$\pi_0(F_1-F_0)$        |$p_1$            |
|$\cdots$|$\cdots$              |$\cdots$                |$\cdots$         |
|$k$     |$\pi_k = (1+r)\^{1+k}$|$\pi_{k-1}(F_k-F_{k-1})$|$p_k$            |
|$\cdots$|$\cdots$              |$\cdots$                |$\cdots$         |
|$n$     |liquidate             |$\pi_{n-1}(F_n-F_{n-1})$|$p_n$            |


We note that the payment made at day $k$ is $(1+r)\^k(F_k-F_{k-1})$, and so the value of such payment at maturity $p_k = (1+r)\^{n-k} \cdot (1+r)\^k(F_k-F_{k-1}) = (1+r)\^n(F_k-F_{k-1})$. Hence, the value of the futures contract will be the bond investment + the values of each payments made, or $(1+r)\^n F_0 + (1+r)\^n (F_n-F_0) = (1+r)\^nS_n$ (remember $F_n = S_n$).

</div>

