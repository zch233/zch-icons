// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IdcardTwotoneSvg from 'gupo-icons-base/es/asn/IdcardTwotone';

export interface IdcardTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconIdcardTwotone: IdcardTwotoneIconType = (props, context) => <Icon name='IdcardTwotone' {...{ ...props, ...context.attrs }} icon={IdcardTwotoneSvg} />;

IconIdcardTwotone.displayName = 'IconIdcardTwotone';
IconIdcardTwotone.theme = 'twotone';
IconIdcardTwotone.originName = 'idcard';

export default IconIdcardTwotone;
