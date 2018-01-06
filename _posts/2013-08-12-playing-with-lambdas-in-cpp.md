---
layout: post
title: "Playing with lambdas in C++"
description: I play with lambdas in C++, seeing just how they stack up.
---
C++11 features lambdas, which are anonymous functions.  Anonymous functions are the gateway drug to higher-order programming, and any good language has them: Ruby, Scheme, JavaScript, and so forth.  Now C++ has them, and Visual C++ and GNU C++ both support them, meaning you can use them pretty much anywhere.

The example here is only mildly contrived and is based upon the post I wrote last week about [linked lists][0].  That code was written in C++ to demonstrate the ease of writing both linked lists and templatized code in the language.  Now I've decided to take it a step further and add acceptance of both C-style function pointers and C++11-style lambdas.

[0]: /2013/08/linked-lists

### Let's do it!

Ok.  We start off by changing (very subtly) a couple of methods in `blist`:

{% highlight c++ %}
#include <functional>

// uninteresting parts of the class declaration are elided
template <typename T>
class blist
{
public:
  void Closure(std::function<void(T)> callback) {
    for(blist_node<T> *node = First(); node != Last(); node = node->Next()) {
      callback(node->Value());
    }
  }
  
  void AddIf(T source[], int sourceLength, function<bool(T)> test) {
    int i = 0;
    for( ; i < sourceLength; i++) {
      T atom = source[i];
      if(test(atom) == true) PushBack(atom);
    }    
  }
}
{% endhighlight %}

We can run any test we like on the members of the array `source`, so long as it returns a boolean value.  Likewise, we can perform any operations we like on the list, so long as it doesn't return anything.  Now observe the changes in the tester:

{% highlight c++ %}
int main(int argc, char **argv) {
  blist<int> numbers = new blist<int>();
  int figs[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
  numbers->AddIf(figs, 10, [](int n)->bool{ return (n % 2) ? false : true; });
  numbers->Closure([](int n){ cout << n << endl; });
}
{% endhighlight %}

We compile and run with a sufficiently recent C++ compiler:

    1
    3
    5
    7
    9

The odd syntax belies what we can do with this new facility.  A lambda in C++ is formatted as such:

{% highlight c++ %}
  [/* captures */](/* params */)->return_type{ /* method body */ }
{% endhighlight %}

The capture list allows one to capture elements of the scope in which the lambda is declared.  This allows for semi-true closures; Wikipedia notes in [its article on the subject][1]:

> In programming languages, a closure (also _lexical closure_ or _function closure_) is a function or reference to a function together with a _referencing environment_ -- a table storing a reference to each of the non-local variables (also called free variables or upvalues) of that function.

[1]: http://en.wikipedia.org/wiki/Closure_(computer_science)

The capture list doesn't allow us to use the entire contents of the referencing environment, only what we specify.  I personally like this constraint as it means you're less likely to collide with any names in scope in the outer function, which can be the source of great confusion in languages like JavaScript.

### Sources of Inspiration

Incidentally, three things motivated this post:

1.  Picking back up C++ to work on Bearded Axe again.

2.  Learning JavaScript and jQuery, which makes extensive use of anonymous functions for event handling and iteration.

3.  Learning C# and .NET, whose LINQ facility encourages declarative programming and the use of delegates, which are basically lambdas for C#.

In particular, the design of the `blist` library's `Closure` method came to me after seeing the `array.forEach` method in JavaScript, which you use thusly:

{% highlight javascript %}
var figs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

figs.forEach(function(fig, idx, ary) {
  if(fig % 2 === 0) console.log(fig);  
});
{% endhighlight %}

(Try this out: hit F12 in Chrome and then click on "Console".  Bang out the code and watch it run!)

### Get the code (again)

Check it out [on GitHub][2].  The modified files are `blist_tester.cpp` and `blist.h`.

[2]: https://github.com/tnwae/cpp-data-structures