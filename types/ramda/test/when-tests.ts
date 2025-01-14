import * as R from 'ramda';

() => {
    // $ExpectType (a: string) => string
    const truncate = R.when(
        (str: string) => str.length > 10,
        (str: string) => str.slice(0, 10) + '…',
    );

    // $ExpectType string
    truncate('12345'); // => '12345'
    // $ExpectType string
    truncate('0123456789ABC'); // => '0123456789…'

    // $ExpectType (a: number | undefined) => number | undefined
    const addOneIfNotNil = R.when<undefined | number, number>(x => x != null, R.add(1));

    // $ExpectType number | undefined
    const nil = addOneIfNotNil(undefined);
    // $ExpectType number | undefined
    const two = addOneIfNotNil(1);
};
