#!/bin/bash
docker push dolittle/www
kubectl patch deployment www --namespace dolittle -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"