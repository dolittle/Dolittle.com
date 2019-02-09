#!/bin/bash
docker push dolittle/beta
kubectl patch deployment beta --namespace dolittle -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"