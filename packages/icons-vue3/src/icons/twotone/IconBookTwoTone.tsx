// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BookTwotoneSvg from 'gupo-icons-base/es/asn/BookTwotone';

export interface BookTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBookTwotone: BookTwotoneIconType = (props, context) => <Icon name='BookTwotone' {...{ ...props, ...context.attrs }} icon={BookTwotoneSvg} />;

IconBookTwotone.displayName = 'IconBookTwotone';
IconBookTwotone.theme = 'twotone';
IconBookTwotone.originName = 'book';

export default IconBookTwotone;
