export default {
    '**/*.{js,jsx,tsx,ts,vue}': [
        'npm run lint',
        'npm run format'
    ],
    '**/*.{css,scss}': ['npm run lint:style']
}