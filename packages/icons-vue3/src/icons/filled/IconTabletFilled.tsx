// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TabletFilledSvg from 'icon-base/es/asn/TabletFilled';

export interface TabletFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTabletFilled: TabletFilledIconType = (props, context) => <Icon name='TabletFilled' {...{ ...props, ...context.attrs }} icon={TabletFilledSvg} />;

IconTabletFilled.displayName = 'IconTabletFilled';

export default IconTabletFilled;
