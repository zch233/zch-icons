// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BookFilledSvg from 'icon-base/es/asn/BookFilled';

export interface BookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBookFilled: BookFilledIconType = (props, context) => <Icon name='BookFilled' {...{ ...props, ...context.attrs }} icon={BookFilledSvg} />;

IconBookFilled.displayName = 'IconBookFilled';

export default IconBookFilled;
