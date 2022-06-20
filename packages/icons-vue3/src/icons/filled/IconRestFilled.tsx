// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RestFilledSvg from 'icon-base/es/asn/RestFilled';

export interface RestFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRestFilled: RestFilledIconType = (props, context) => <Icon name='RestFilled' {...{ ...props, ...context.attrs }} icon={RestFilledSvg} />;

IconRestFilled.displayName = 'IconRestFilled';

export default IconRestFilled;
