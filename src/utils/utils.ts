function paginate<T>(items: T[], currentPage: number, totalPages: number) {
	const startIndex: number = (currentPage - 1) * totalPages;
	return items.slice(startIndex).filter((_, index) => index < totalPages);
}

export { paginate }