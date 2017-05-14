import React from "react";
import {Map, List} from "immutable";

import {expect} from "chai";
import {sinon, spy} from "sinon";
import {mount, render, shallow} from "enzyme";

import EditCardForm from "../src/admin/cards/EditCardFormTemplate";
import formState from "../src/admin/formState";

import CardsTable from "../src/admin/cards/CardsTable";


describe("Test tests :)", () => {
    it("Should pass", () => {
        expect(true).to.be.true;
    });
    it("Should do basic arithmetic", () => {
        expect(1+1).to.be.equal(2);
    });
});

describe("Stateless Edit Card Form", () => {
    const data = Map({
        id: 5,
        title: "Hello",
    });
    it("Renders a form", () => {
        const wrapper = shallow(<EditCardForm data={data}/>);
        expect(wrapper.type()).to.equal("form");
    });
    it("Renders data passed in", () => {
        const wrapper = mount(<EditCardForm data={data}/>);
        expect(wrapper.find("input")).to.have.length(4);
    });
    it("Calls an update function on change", () => {
        const change = spy();
        const wrapper = mount(<EditCardForm data={data} onChange={change}/>);
        wrapper.find("input[name='title']").simulate("change", {target: {value: "h"}});
        expect(change.calledWith(Map({title: "h"}))).to.equal(true);
    });
    it("Calls a submit function on submit", () => {
        const submit = spy();
        const wrapper = shallow(<EditCardForm data={data} onChange={() => {}} onSubmit={submit}/>);
        wrapper.find("form").simulate("submit", {preventDefault: () => {}});
        const expected = Map(data).filter((value, key) => (List.of("title").includes(key)));
        expect(submit.calledWith(expected)).to.equal(true);
    });
});

describe("State Edit Card Form", () => {
    const Form = formState(EditCardForm);
    const data = {
        id: 10,
        title: "YOYO!",
        questionText: "HEY",
        answerText: "HO",
    };
    const mutate = spy();
    const wrapper = mount(<Form data={data} mutate={mutate}/>);
    it("Renders data given to it once done loading", () => {
        expect(wrapper.find("input[name='title']")).to.have.length(1);
    });
    wrapper.find("form").simulate("submit", {preventDefault: () => {}});
    it("Calls mutate when submitted", () => {
        expect(mutate.called).to.equal(true);
    });
    it("Calls mutate with the correct params", () => {
        expect(mutate.calledWith({
            variables: {
                id: data.id,
                record: {
                    title: data.title,
                    questionText: data.questionText,
                    answerText: data.answerText,
                },
            },
        })).to.equal(true);
    });
});

describe("Cards Table", () => {
    const wrapper = shallow(<CardsTable data={List.of(
        Map({
            id: 1,
            title: "Hello",
            questionText: "Hello",
            answerText: "Hello",
        })
    )}/>);
    it("Renders a table", () => {
        expect(wrapper.type()).to.equal("table");
    });
    it("Renders the data", () => {
        expect(wrapper.find({children: 1})).to.have.length(1);
        expect(wrapper.find({children: "Hello"})).to.have.length(3);
    });
});
