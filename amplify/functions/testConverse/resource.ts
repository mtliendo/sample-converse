import { defineFunction } from '@aws-amplify/backend'

export const testConverse = defineFunction({
	name: 'testConverse',
	entry: './main.ts',
	runtime: 20,
})
