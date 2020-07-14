import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
  it("renders value when passed", () => {
    const value = 1;
    const wrapper = shallowMount(HelloWorld, {
      propsData: { value }
    });
    expect(wrapper.text()).to.include(value);
  });
});
