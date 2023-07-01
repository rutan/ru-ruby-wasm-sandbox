require 'js'

JS.eval(<<EOS
  window.mySleep = function (time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  window.doPrint = function (str) {
    document.body.innerText = str;
  }
EOS
)

class RandomWord
  def say
    %w[wow hi! yahoo].sample
  end
end

word = RandomWord.new.say

loop do
  JS.global.doPrint("#{word} / #{Time.now}")
  JS.global.mySleep(1000).await
end
