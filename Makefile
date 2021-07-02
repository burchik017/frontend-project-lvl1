install:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

brain-games:
	node bin/brain-games.js

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

link:
	npm link
