// addon.cc
#include <node.h>
#include<string>
namespace demo {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

// This is the implementation of the "add" method
// Input arguments are passed using the
// const FunctionCallbackInfo<Value>& args struct
void Greet(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

v8::Local<v8::String> result = String::NewFromUtf8(isolate,"Hello, world" );

args.GetReturnValue().Set(result);

}

void Init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "greet", Greet);
}

NODE_MODULE(addon, Init)

}  // namespace demo