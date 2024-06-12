import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { testConverse } from './functions/testConverse/resource'
import { defineBackend } from '@aws-amplify/backend'
import { Stack } from 'aws-cdk-lib'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import * as path from 'path'
const dirname = import.meta.dirname
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
	testConverse,
})
const thisStack = Stack.of(backend.testConverse.resources.lambda)
const test2Converse = new NodejsFunction(thisStack, 'test2Converse', {
	functionName: 'test2Converse',
	entry: path.join(dirname, './functions/testConverse/main.ts'),
	runtime: Runtime.NODEJS_20_X,
	handler: 'handler',
})
