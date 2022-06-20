// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppstoreFilledSvg from 'icon-base/es/asn/AppstoreFilled';

export interface AppstoreFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAppstoreFilled: AppstoreFilledIconType = (props, context) => (
    <Icon name='AppstoreFilled' {...{ ...props, ...context.attrs }} icon={AppstoreFilledSvg} />
);

IconAppstoreFilled.displayName = 'IconAppstoreFilled';

export default IconAppstoreFilled;
