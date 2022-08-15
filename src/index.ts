//Behavioral
import { IteratorClient } from "./Behavioral/iterator/IteratorClient";
import { originator } from "./Behavioral/memento/Originator";
import { stateClient } from "./Behavioral//state/client";
import { strategyClient } from "./Behavioral/strategy/client";
import { TemplateMethodClient } from "./Behavioral/template method/TemplateMethodClient";
import { observerClient } from "./Behavioral/observer/observerClient";
import { commandInvoker } from "./Behavioral/command/invoker";
import { plainClient } from "./Behavioral/mediator/plain/plainClient";
import { chainClient } from "./Behavioral/chain of responsibility/chainClient";
//structural
import { compositeClient } from "./structural/composite/compositeClient";
import { decoratorClient } from "./structural/decorator/decoratorClient";
import { adapterClient } from "./structural/Adapter/adapterClient";
import { flyweightClient } from "./structural/Flyweight/flyweightClient";
import { bridgeClient } from "./structural/bridge/bridgeClient";
import { proxyClient } from "./structural/proxy/proxyClient";

proxyClient()