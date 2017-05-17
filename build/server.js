"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _iso = require("./src/iso");

var _serveStatic = require("serve-static");

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _graphqlServerExpress = require("graphql-server-express");

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphqlTools = require("graphql-tools");

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _schema = require("./graphql/schema");

var _schema2 = _interopRequireDefault(_schema);

var _resolvers = require("./graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: _schema2.default,
    resolvers: _resolvers2.default
});

var app = (0, _express2.default)();

app.set("view engine", "ejs");

app.use("/build", (0, _serveStatic2.default)("dist"));
app.use("*/graphql", (0, _cors2.default)(), _bodyParser2.default.json(), (0, _graphqlServerExpress.graphqlExpress)(function (req) {
    return {
        schema: schema
    };
}));
app.use("*/graphiql", (0, _graphqlServerExpress.graphiqlExpress)({
    endpointURL: "graphql"
}));
app.use(_iso.isoMiddleware);

app.listen(3000, function () {
    console.log("Listening");
});