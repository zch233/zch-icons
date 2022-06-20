// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ChromeFilledSvg from 'icon-base/es/asn/ChromeFilled';

export interface ChromeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconChromeFilled: ChromeFilledIconType = (props, context) => <Icon name='ChromeFilled' {...{ ...props, ...context.attrs }} icon={ChromeFilledSvg} />;

IconChromeFilled.displayName = 'IconChromeFilled';

export default IconChromeFilled;
