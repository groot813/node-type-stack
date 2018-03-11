export abstract class IMongoRepository<T> {
	insertBulk(items: T[]): Promise<any> {
		return new Promise(resolve => null)
	}

	deleteBulk(ids: string[]): Promise<any> {
		return new Promise(resolve => null)
	}

	deleteAll(): Promise<any> {
		return new Promise(resolve => null)
	}

	list(): Promise<T[]> {
		return new Promise(resolve => null)
	}

	listAll(): Promise<T[]> {
		return new Promise(resolve => null)
	}

	update(): Promise<any> {
		return new Promise(resolve => null)
	}
}