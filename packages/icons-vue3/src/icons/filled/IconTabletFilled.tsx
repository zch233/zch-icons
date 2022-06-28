// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TabletFilledSvg from 'gupo-icons-base/es/asn/TabletFilled';

export interface TabletFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTabletFilled: TabletFilledIconType = (props, context) => <Icon name='TabletFilled' {...{ ...props, ...context.attrs }} icon={TabletFilledSvg} />;

IconTabletFilled.displayName = 'IconTabletFilled';
IconTabletFilled.theme = 'filled';
IconTabletFilled.originName = 'tablet';

export default IconTabletFilled;
