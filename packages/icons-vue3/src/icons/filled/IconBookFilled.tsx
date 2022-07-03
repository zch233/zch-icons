// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BookFilledSvg from 'icons-base/es/asn/BookFilled';

export interface BookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBookFilled: BookFilledIconType = (props, context) => <Icon name='BookFilled' {...{ ...props, ...context.attrs }} icon={BookFilledSvg} />;

IconBookFilled.displayName = 'IconBookFilled';
IconBookFilled.theme = 'filled';
IconBookFilled.originName = 'book';

export default IconBookFilled;
