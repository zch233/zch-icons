// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RestTwotoneSvg from 'icons-base/es/asn/RestTwotone';

export interface RestTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRestTwotone: RestTwotoneIconType = (props, context) => <Icon name='RestTwotone' {...{ ...props, ...context.attrs }} icon={RestTwotoneSvg} />;

IconRestTwotone.displayName = 'IconRestTwotone';
IconRestTwotone.theme = 'twotone';
IconRestTwotone.originName = 'rest';

export default IconRestTwotone;
