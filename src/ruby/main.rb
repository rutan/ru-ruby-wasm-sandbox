require 'js'
require 'base64'

JS.eval(<<EOS
  window.doPrint = function (str) {
    document.body.innerText = str;
  }
EOS
)

class RandomWord
  def initialize(words)
    @words = words
  end

  def say
    @words.sample
  end
end

bin64 = JS.global[:rubyBridge][:utils].fetchBinaryBase64('words.dat').await
bin = Base64.decode64(bin64.to_s)
words = Marshal.load(bin)

word = RandomWord.new(words).say

loop do
  JS.global.doPrint("#{word} / #{Time.now}")
  JS.global[:rubyBridge][:utils].sleep(1).await
end
